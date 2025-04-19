"use client";
import { auth } from "@/api";
import useRouter from "../useRouter";
import { useAuthStore } from "@/store";

export function useAuth() {
  const router = useRouter();
  const { setTokens } = useAuthStore();

  const callback = async (code: string, state: string) => {
    try {
      const tokens = await auth.getToken({ code, state });
      setTokens(tokens.access_token, tokens.refresh_token);
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { callback };
}
