"use client";

import { getTopArtists } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useTopArtists = ({
  timeRange = "short_term",
  page = 1,
  limit = 20,
}: GetTopTracksRequest) =>
  useQuery({
    queryKey: ["top-artists", { limit, timeRange, page }],
    queryFn: () => getTopArtists({ limit, timeRange, page }),
  });
