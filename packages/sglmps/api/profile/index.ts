"use client";

import api from "../instance";

export const checkIsSavedTrack = async ({
  trackIds = [],
}: CheckIsSavedTrackRequest) =>
  await api
    .get<boolean[]>(`/me/tracks/contains?ids=${trackIds.join(",")}`)
    .then((res) => res.data);
