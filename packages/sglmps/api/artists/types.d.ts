interface GetTopArtistsRequest {
  timeRange?: RequestTimeRange;
  limit?: number; // allowed range 1-50,
  page?: number;
}
