interface GetTopArtistsRequest {
  timeRange?: RequestTimeRange;
  limit?: number; // allowed range 1-50,
  offset?: number;
  url?: string;
}

interface GetTopArtistsResponse {
  items: ArtistItem[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string;
  previous: any;
}

interface ArtistItem {
  external_urls: ArtistExternalUrls;
  followers: ArtistFollowers;
  genres: string[];
  href: string;
  id: string;
  images: ImageResponse[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface ArtistFollowers {
  href: any;
  total: number;
}
