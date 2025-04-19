interface GetTokenRequest {
  state: string;
  code: string;
}

interface GetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface RefreshTokenRequest {
  refresh: string | null;
}
