interface Profile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ProfileExplicitContent;
  external_urls: ProfileExternalUrls;
  followers: ProfileFollowers;
  href: string;
  id: string;
  images: ImageResponse[];
  product: string;
  type: string;
  uri: string;
}

interface ProfileExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

interface ProfileExternalUrls {
  spotify: string;
}

interface ProfileFollowers {
  href: any;
  total: number;
}

interface GetPlaylistsResponse {
  href: string;
  limit: number;
  next: any;
  offset: number;
  previous: any;
  total: number;
  items: PlaylistItem[];
}

interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: PlaylistUrls;
  href: string;
  id: string;
  images?: ImageResponse[];
  name: string;
  owner: PlaylistOwner;
  primary_color: any;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks[];
  type: string;
  uri: string;
}

interface PlaylistUrls {
  spotify: string;
}

interface PlaylistOwner {
  display_name: string;
  external_urls: PlaylistOwnerUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface PlaylistOwnerUrls {
  spotify: string;
}

interface PlaylistTracks {
  href: string;
  total: number;
}

interface CheckIsSavedTrackRequest {
  trackIds: string[];
}

interface GetSavedRequest {
  limit?: number;
  offset?: number;
  url?: string;
}

interface GetSavedResponse {
  href: string;
  items: GetSavedResponseItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

interface GetSavedResponseItem {
  added_at: string;
  track: PlaylistTracks;
}

interface GetRecentlyPlayedRequest {
  limit?: number;
  offset?: number;
  url?: string;
}

interface GetRecentlyPlayedResponse {
  items: GetRecentlyPlayedResponseItem[];
  next: string;
  cursors: PlaybackCursors;
  limit: number;
  href: string;
}

interface GetRecentlyPlayedResponseItem {
  track: PlaylistTracks;
  played_at: string;
  context: PlaybackContext;
}

interface PlaybackContext {
  href: string;
  external_urls: playbackContextUrls;
  type: string;
  uri: string;
}

interface playbackContextUrls {
  spotify: string;
}

interface PlaybackCursors {
  after: string;
  before: string;
}
