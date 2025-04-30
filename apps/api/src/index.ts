import { storeState, validateState } from './lib';

const FRONTEND_URL = 'https://shuffleg.netlify.app';
const ALLOWED_ORIGINS = [FRONTEND_URL, null];
const PERMISSION_SCOPE = [
	'user-top-read',
	'user-library-read',
	'user-read-recently-played',
	'user-read-private',
	'user-read-email',
	'playlist-read-private',
];

export default {
	async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
		const origin = request.headers.get('Origin');

		const corsHeaders = {
			'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: corsHeaders,
			});
		}

		if (!ALLOWED_ORIGINS.includes(origin)) {
			return new Response('forbidden', {
				status: 403,
				headers: {
					'Access-Control-Allow-Origin': 'null',
				},
			});
		}

		const url = new URL(request.url);

		try {
			if (url.pathname === '/login') {
				const state = await storeState(env);
				const scope = PERMISSION_SCOPE.join(' ');
				const client_id = env.SPOTIFY_CLIENT_ID;
				const redirect_uri = `${FRONTEND_URL}/callback`;

				const params = new URLSearchParams({
					response_type: 'code',
					client_id,
					scope,
					redirect_uri,
					state,
				});

				return new Response(`https://accounts.spotify.com/authorize?${params.toString()}`, {
					status: 200,
					headers: corsHeaders,
				});
			}

			if (url.pathname === '/get-token') {
				const reqBody = new URLSearchParams(await request.text());

				if (!validateState(env, reqBody.get('state'))) return new Response('state_mismatch', { status: 400 });

				const body = {
					...Object.fromEntries(reqBody),
					redirect_uri: `${FRONTEND_URL}/callback`,
					grant_type: 'authorization_code',
				};

				const proxyResp = await fetch('https://accounts.spotify.com/api/token', {
					method: request.method,
					headers: {
						Authorization: 'Basic ' + btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`),
						'Content-Type': request.headers.get('Content-Type') || 'application/json',
					},
					body: new URLSearchParams(body),
				});

				const proxyBody = await proxyResp.text();

				return new Response(proxyBody, {
					status: proxyResp.status,
					headers: {
						'Content-Type': proxyResp.headers.get('Content-Type') || 'application/json',
						...corsHeaders,
					},
				});
			}

			if (url.pathname === '/refresh-token') {
				const reqBody = new URLSearchParams(await request.text());

				const body = {
					...Object.fromEntries(reqBody),
					redirect_uri: `${FRONTEND_URL}/callback`,
					grant_type: 'refresh_token',
				};

				const proxyResp = await fetch('https://accounts.spotify.com/api/token', {
					method: request.method,
					headers: {
						Authorization: 'Basic ' + btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`),
						'Content-Type': request.headers.get('Content-Type') || 'application/json',
					},
					body: new URLSearchParams(body),
				});

				const proxyBody = await proxyResp.text();

				return new Response(proxyBody, {
					status: proxyResp.status,
					headers: {
						'Content-Type': proxyResp.headers.get('Content-Type') || 'application/json',
						...corsHeaders,
					},
				});
			}
		} catch (err) {
			console.log(String(err));
			return new Response('server_error', {
				status: 500,
				headers: corsHeaders,
			});
		}

		return new Response('forbidden', {
			status: 403,
			headers: {
				'Access-Control-Allow-Origin': 'null',
			},
		});
	},
};
