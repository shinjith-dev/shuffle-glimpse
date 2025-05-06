interface GetAlbumTracksRequest {
  limit?: number; // allowed range 1-50,
  offset?: number;
  url?: string;
  albumId?: string;
}

interface GetAlbumTracksResponse {
  href: string;
  items: AlbumTrack[];
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
}

interface AlbumTrack {
  artists: AlbumTrackArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: TrackExternalUrls;
  href: string;
  id: string;
  name: string;
  preview_url: any;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
  restrictions?: TrackRestrictions;
}

interface AlbumTrackArtist {
  external_urls: ArtistExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface GetAlbumRequest {
  albumId: string;
}

interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: AlbumExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: ArtistItem[];
  tracks: AlbumTracks;
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: any[];
  label: string;
  popularity: number;
}

interface AlbumExternalUrls {
  spotify: string;
}

interface AlbumTracks {
  href: string;
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
  items: TrackItem[];
}

interface Copyright {
  text: string;
  type: string;
}
