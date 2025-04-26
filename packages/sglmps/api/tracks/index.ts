"use client";

import api from "../instance";

export const getTopTracks = async ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
  url,
}: GetTopTracksRequest) =>
  await api
    .get<GetTopTracksResponse>(
      url
        ? url
        : `/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`,
    )
    .then((res) => res.data);

export const getTrack = async ({ trackId }: GetTrackRequest) =>
  trackId
    ? await api.get<Track>(`/tracks/${String(trackId)}`).then((res) => res.data)
    : Promise.resolve(undefined);
