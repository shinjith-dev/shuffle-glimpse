interface GetTrackRequest {
  trackId?: any;
}

interface Track {
  album: TrackAlbum;
  artists: TrackArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: TrackExtIds;
  external_urls: TrackUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: any;
  track_number: number;
  type: string;
  uri: string;
}

interface TrackAlbum {
  album_type: string;
  artists: TrackAlbumArtist[];
  available_markets: string[];
  external_urls: TrackAlbumUrls;
  href: string;
  id: string;
  images: ImageResponse[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface TrackAlbumArtist {
  external_urls: TrackAlbumArtistUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackAlbumArtistUrls {
  spotify: string;
}

interface TrackAlbumUrls {
  spotify: string;
}

interface TrackArtist {
  external_urls: TrackArtistUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface TrackArtistUrls {
  spotify: string;
}

interface TrackExtIds {
  isrc: string;
}

interface TrackUrls {
  spotify: string;
}

interface GetTopTracksRequest {
  timeRange?: RequestTimeRange;
  limit?: number; // allowed range 1-50,
  offset?: number;
  url?: string;
}

interface GetTopTracksResponse {
  items: PlaylistTracks[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: any;
}

interface PlaylistTracks {
  album: TrackAlbum;
  artists: TrackArtist[];
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

interface TrackAlbum {
  album_type: string;
  artists: TrackArtist[];
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

interface PlaylistUrls {
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

interface TrackArtist {
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
