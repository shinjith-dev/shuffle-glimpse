"use client";

import api from "../instance";

export const checkIsSavedTrack = async ({
  trackIds = [],
}: CheckIsSavedTrackRequest) =>
  await api
    .get<boolean[]>(`/me/tracks/contains?ids=${trackIds.join(",")}`)
    .then((res) => res.data);

export const getSaved = async ({
  limit = 20,
  offset = 0,
  url,
}: GetSavedRequest) =>
  await api
    .get<GetSavedResponse>(
      url ? url : `/me/tracks?limit=${limit}&offset=${offset}`,
    )
    .then((res) => res.data);
