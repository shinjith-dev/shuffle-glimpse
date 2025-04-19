import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,
        setTokens: (access, refresh) =>
          set({ accessToken: access, refreshToken: refresh }),
        clearTokens: () => set({ accessToken: null, refreshToken: null }),
      }),
      { name: "auth-store" },
    ),
    { name: "auth-store" },
  ),
);
