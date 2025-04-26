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
  items: ResponseItem[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}

interface ResponseItem {
  added_at: string;
  track: TrackItem;
}
