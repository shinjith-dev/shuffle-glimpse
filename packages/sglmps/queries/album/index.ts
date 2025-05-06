"use client";

import { getAlbum, getAlbumTracks } from "@/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useAlbum = ({ albumId }: GetAlbumRequest) =>
  useQuery({
    queryKey: ["album", albumId],
    queryFn: () => getAlbum({ albumId }),
  });

export const useAlbumTracks = ({
  limit = 20,
  albumId,
}: GetAlbumTracksRequest) =>
  useInfiniteQuery({
    queryKey: ["album", "tracks", { albumId }],
    queryFn: ({ pageParam }) =>
      getAlbumTracks({ url: pageParam, albumId, limit }),
    initialPageParam: `/albums/${String(albumId)}/tracks?limit=${limit}`,
    getNextPageParam: (lastPage, pages) =>
      pages.length < 5 && lastPage?.next ? lastPage.next : undefined,
    getPreviousPageParam: (firstPage) => firstPage.previous || undefined,
  });
