"use client";

import { getTopTracks } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useTopTracks = ({
  timeRange = "short_term",
  page = 1,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-tracks", timeRange, page, limit],
    queryFn: () => getTopTracks({ limit, timeRange, page }),
  });
