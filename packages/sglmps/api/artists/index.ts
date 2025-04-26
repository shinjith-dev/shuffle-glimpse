"use client";

import api from "../instance";

export const getTopArtists = async ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
  url,
}: GetTopArtistsRequest) =>
  await api
    .get<GetTopArtistsResponse>(
      url
        ? url
        : `/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${offset}`,
    )
    .then((res) => res.data);
