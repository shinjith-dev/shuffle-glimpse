"use client";

import { useAuthStore } from "@/store";
import axios from "axios";
import { auth } from "./auth";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refresh = useAuthStore.getState().refreshToken;
        console.log("refresh", refresh);
        const refreshData = await auth.refreshToken({ refresh_token: refresh });
        console.log("refresh response", refreshData);

        const newAccessToken = refreshData.access_token;

        useAuthStore.getState().setTokens(newAccessToken);

        onRefreshed(newAccessToken);
        return api(originalRequest);
      } catch (err) {
        useAuthStore.getState().clearTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
