"use client";
import axios from "axios";

export function useAuth() {
  const callback = (code: string) => {
    axios.post(
      "https://sglmps.shinjith.dev/api/token",
      {
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://127.0.0.1:3000/callback",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  };

  return { callback };
}
