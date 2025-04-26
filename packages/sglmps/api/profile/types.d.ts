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
  track: TrackItem;
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
  track: TrackItem;
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
