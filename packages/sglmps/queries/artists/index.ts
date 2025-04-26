"use client";

import { getTopArtists } from "@/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useTopArtists = ({
  timeRange = "short_term",
  offset = 0,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-artists", { limit, timeRange, offset }],
    queryFn: () => getTopArtists({ limit, timeRange, offset }),
  });

export const useTopArtistsInfinitely = ({
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
