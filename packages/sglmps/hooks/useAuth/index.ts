"use client";
import { auth } from "@/api";
import useRouter from "../useRouter";

export function useAuth() {
  const router = useRouter();

  const callback = (code: string, state: string) => {
    try {
      auth.getToken({ code, state });
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { callback };
}
