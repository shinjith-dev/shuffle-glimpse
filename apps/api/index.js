const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
let accessToken = null;
let expiresAt = null;

async function refreshToken() {
  console.log("Refreshing access token...");

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    accessToken = response.data.access_token;
    expiresAt = Date.now() + response.data.expires_in * 1000;

    console.log("Token refreshed successfully.");
  } catch (err) {
    console.error("Failed to refresh token", err);
    throw new Error("Could not refresh access token");
  }
}

async function getAccessToken(_req, _res, next) {
  const now = Date.now();

  if (!accessToken || !expiresAt || now >= expiresAt - 60000) {
    await refreshToken();
  }

  next();
}

app.use(express.json());

app.use(getAccessToken);

app.use(async (req, res) => {
  if (req.path.startsWith("/api")) {
    try {
      const spotifyApi = "https://api.spotify.com/v1";
      const url = req.path.replace(/\/api/, spotifyApi);

      const response = await axios({
        method: req.method,
        url,
        headers: {
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
        data: req.body,
        params: req.query,
      });

      res.status(response.status).send(response.data);
    } catch (error) {
      console.error(error.message);
      res
        .status(error.response?.status || 500)
        .send(error.response?.data || "Server error");
    }
  } else res.end("Nothing in here");
});

app.listen(PORT, () => {
  console.log(`Express interceptor listening on port ${PORT}`);
});
