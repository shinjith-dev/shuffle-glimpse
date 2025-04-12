interface TokenCache {
	token: string | null;
	expiresAt: number;
}

let tokenCache: TokenCache = {
	token: null,
	expiresAt: 0,
};

const ALLOWED_ORIGINS = ['https://yourdomain.com', 'http://localhost:3000'];

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const origin = request.headers.get('Origin');

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
					'Access-Control-Allow-Headers': '*',
				},
			});
		}

		if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
			return new Response('Forbidden', {
				status: 403,
				headers: {
					'Access-Control-Allow-Origin': 'null',
				},
			});
		}

		const url = new URL(request.url);
		const now = Date.now();

		// Refresh token if expired or missing
		if (!tokenCache.token || now >= tokenCache.expiresAt - 60_000) {
			const tokenResp = (await fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `grant_type=client_credentials&client_id=${env.SPOTIFY_CLIENT_ID}&client_secret=${env.SPOTIFY_CLIENT_SECRET}`,
			})) as any;

			if (!tokenResp.ok) {
				return new Response('Failed to fetch Spotify token', { status: 500 });
			}

			const data = await tokenResp.json();
			tokenCache.token = data.access_token;
			tokenCache.expiresAt = now + data.expires_in * 1000;
		}

		const spotifyUrl = 'https://api.spotify.com/v1' + url.pathname;

		const proxyResp = await fetch(spotifyUrl + url.search, {
			method: request.method,
			headers: {
				Authorization: `Bearer ${tokenCache.token}`,
				'Content-Type': request.headers.get('Content-Type') || 'application/json',
			},
			body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.text() : undefined,
		});

		const proxyBody = await proxyResp.text();
		return new Response(proxyBody, {
			status: proxyResp.status,
			headers: {
				'Content-Type': proxyResp.headers.get('Content-Type') || 'application/json',
			},
		});
	},
};
