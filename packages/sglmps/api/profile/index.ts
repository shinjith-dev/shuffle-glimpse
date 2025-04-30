"use client";

import api from "../instance";

export const getProfle = async () =>
  await api.get<Profile>("/me").then((res) => res.data);

export const checkIsSavedTrack = async ({
  trackIds = [],
}: CheckIsSavedTrackRequest) =>
  trackIds.length > 0
    ? await api
        .get<boolean[]>(`/me/tracks/contains?ids=${trackIds.join(",")}`)
        .then((res) => res.data)
    : Promise.resolve([]);

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

export const getRecentlyPlayed = async ({
  limit = 20,
  offset = 0,
  url,
}: GetRecentlyPlayedRequest) =>
  await api
    .get<GetRecentlyPlayedResponse>(
      url ? url : `/me/player/recently-played?limit=${limit}&offset=${offset}`,
    )
    .then((res) => res.data);

export const getPlaylists = async () =>
  await api.get<GetPlaylistsResponse>("/me/playlists").then((res) => res.data);
