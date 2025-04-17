import axios from "axios";

const authApi = axios.create({
  baseURL: "https://sglmps.shinjith.dev",
});

export default authApi;
