import authApi from "../authInstance";

export const auth = {
  login: async () =>
    await authApi
      .get("/login")
      .then((res) => window.location.replace(res.data)),
  getToken: async (payload: GetTokenRequest) =>
    await authApi
      .post<GetTokenResponse>("/get-token", payload, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => res.data),
  refreshToken: async (payload: RefreshTokenRequest) =>
    await authApi
      .post("/refresh-token", payload, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => res.data),
};
