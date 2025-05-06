"use client";

import api from "../instance";

export const getAlbum = async ({ albumId }: GetAlbumRequest) =>
  api.get<Album>(`/albums/${String(albumId)}`).then((res) => res.data);

export const getAlbumTracks = async ({
  albumId,
  limit,
  offset,
  url,
}: GetAlbumTracksRequest) =>
  api
    .get<GetAlbumTracksResponse>(
      url
        ? url
        : `/albums/${String(albumId)}/tracks?limit=${limit}&offset=${offset}`,
    )
    .then((res) => res.data);
