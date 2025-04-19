"use client";

import api from "../instance";

export const getTopArtists = async ({
  timeRange = "short_term",
  page = 1,
  limit = 20,
}: GetTopArtistsRequest) =>
  await api
    .get<GetTopArtistsResponse>(
      `/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${(page - 1) * limit}`,
    )
    .then((res) => res.data);
