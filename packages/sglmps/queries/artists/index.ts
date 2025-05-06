"use client";

import { getArtist, getArtistsTopTracks, getTopArtists } from "@/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useArtist = ({ artistId }: GetArtistRequest) =>
  useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => getArtist({ artistId }),
  });

export const useArtistTopTracks = ({ artistId }: GetArtistRequest) =>
  useQuery({
    queryKey: ["artist", "tracks", artistId],
    queryFn: () => getArtistsTopTracks({ artistId }),
  });

export const useTopArtistsGlimpse = ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-artists", "glimpse", { limit, timeRange, offset }],
    queryFn: () => getTopArtists({ limit, timeRange, offset }),
  });

export const useTopArtists = ({
  timeRange = "short_term",
  limit = 10,
}: GetTopTracksRequest) =>
  useInfiniteQuery({
    queryKey: ["top-artists", "all", { timeRange }],
    queryFn: ({ pageParam }) => getTopArtists({ url: pageParam, timeRange }),
    initialPageParam: `/me/top/artists?time_range=${timeRange}&limit=${limit}`,
    getNextPageParam: (lastPage, pages) =>
      pages.length < 5 && lastPage?.next ? lastPage.next : undefined,
    getPreviousPageParam: (firstPage) => firstPage.previous || undefined,
  });
