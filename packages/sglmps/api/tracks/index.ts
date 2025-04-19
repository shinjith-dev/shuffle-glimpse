"use client";

import api from "../instance";

export const getTopTracks = async ({
  timeRange = "short_term",
  page = 1,
  limit = 20,
}: GetTopTracksRequest) =>
  await api
    .get<GetTopTracksResponse>(
      `/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${(page - 1) * limit}`,
    )
    .then((res) => res.data);
