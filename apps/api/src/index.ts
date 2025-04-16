interface TokenCache {
	token: string | null;
	expiresAt: number;
}

let tokenCache: TokenCache = {
	token: null,
	expiresAt: 0,
};

const ALLOWED_ORIGINS = ['https://yourdomain.com', 'http://localhost:3000', 'http://127.0.0.1:3000', null];
const FRONTEND_URL = 'http://localhost:3000';

function generateRandomString(length: number) {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let text = '';
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

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

		if (!ALLOWED_ORIGINS.includes(origin)) {
			return new Response('Forbidden', {
				status: 403,
				headers: {
					'Access-Control-Allow-Origin': 'null',
				},
			});
		}

		const url = new URL(request.url);

		if (url.pathname === '/login') {
			const state = generateRandomString(16);
			const scope = 'user-read-private user-read-email';
			const client_id = env.SPOTIFY_CLIENT_ID;
			const redirect_uri = `http://127.0.0.1:3000/callback`; //`${FRONTEND_URL}/callback`;

			const params = new URLSearchParams({
				response_type: 'code',
				client_id,
				scope,
				redirect_uri,
				state,
			});

			return Response.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`, 302);
		}

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

		if (url.pathname === '/api/token') {
			const body = await request.clone().text();
			const proxyResp = await fetch('https://accounts.spotify.com/api/token', {
				method: request.method,
				headers: {
					Authorization: 'Basic ' + btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`),
					'Content-Type': request.headers.get('Content-Type') || 'application/json',
				},
				body,
			});

			const proxyBody = await proxyResp.text();

			return new Response(proxyBody, {
				status: proxyResp.status,
				headers: {
					'Content-Type': proxyResp.headers.get('Content-Type') || 'application/json',
				},
			});
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
