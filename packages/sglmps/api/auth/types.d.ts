interface GetTokenRequest {
  state: string;
  code: string;
}

interface RefreshTokenRequest {
  refresh: string;
}
