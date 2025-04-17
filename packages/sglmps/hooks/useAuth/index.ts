"use client";
import axios from "axios";

export function useAuth() {
  const callback = (code: string, state: string) => {
    axios.post(
      "http://127.0.0.1:8787/get-token",
      { code, state },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );
  };

  return { callback };
}
