"use client";

import { getTopTracks, getTrack } from "@/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useTopTracksGlimpse = ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-tracks", "glimpse", { limit, timeRange, offset }],
    queryFn: () => getTopTracks({ limit, timeRange, offset }),
  });

export const useTopTracks = ({
  timeRange = "short_term",
  limit = 20,
}: GetTopTracksRequest) =>
  useInfiniteQuery({
    queryKey: ["top-tracks", "all", { timeRange }],
    queryFn: ({ pageParam }) => getTopTracks({ url: pageParam, timeRange }),
    initialPageParam: `/me/top/tracks?time_range=${timeRange}&limit=${limit}`,
    getNextPageParam: (lastPage, pages) =>
      pages.length < 5 && lastPage?.next ? lastPage.next : undefined,
    getPreviousPageParam: (firstPage) => firstPage.previous || undefined,
  });

export const useTrack = ({ trackId }: GetTrackRequest) =>
  useQuery({
    queryKey: ["track", trackId],
    queryFn: () => getTrack({ trackId }),
  });
