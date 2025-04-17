"use client";
import axios from "axios";

export function useAuth() {
  const callback = (code: string, state: string) => {
    axios.post(
      "https://sglmps.shinjith.dev/api/token",
      { code, state },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );
  };

  return { callback };
}
