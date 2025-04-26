interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh?: string) => void;
  clearTokens: () => void;
}
