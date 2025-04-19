interface GetTopTracksRequest {
  timeRange?: "short_term" | "medium_term" | "long_term";
  limit?: number; // allowed range 1-50,
  page?: number;
}

interface GetTopTracksResponse {
  items: TrackItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: any;
}

interface TrackItem {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: TrackExternalIds;
  external_urls: TrackExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: any;
  track_number: number;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: AlbumExternalUrls;
  href: string;
  id: string;
  images: ImageResponse[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface AlbumExternalUrls {
  spotify: string;
}

interface ImageResponse {
  height: number;
  url: string;
  width: number;
}

interface Artist {
  external_urls: ArtistExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ArtistExternalUrls {
  spotify: string;
}

interface TrackExternalIds {
  isrc: string;
}

interface TrackExternalUrls {
  spotify: string;
}
