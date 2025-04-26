"use client";

import { getTopTracks } from "@/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useTopTracks = ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-tracks", { limit, timeRange, offset }],
    queryFn: () => getTopTracks({ limit, timeRange, offset }),
  });

export const useTopTracksInfinitely = ({
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
