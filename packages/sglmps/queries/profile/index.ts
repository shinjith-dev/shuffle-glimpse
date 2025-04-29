import {
  checkIsSavedTrack,
  getPlaylists,
  getProfle,
  getRecentlyPlayed,
  getSaved,
} from "@/api/profile";
import { useIsSaved } from "@/store";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: getProfle,
  });

export const useIsSavedTrack = ({
  trackIds = [],
  enabled = true,
}: UseIsSavedTrackArgs) => {
  const { upsertTracks } = useIsSaved();
  const { data: statuses } = useQuery({
    queryKey: ["is-saved", ...trackIds],
    queryFn: () => checkIsSavedTrack({ trackIds }),
    enabled,
  });

  if (
    trackIds.length &&
    statuses?.length &&
    trackIds.length === statuses.length
  )
    upsertTracks(trackIds, statuses);
};

export const useSaved = ({ limit = 20, offset = 0 }: GetSavedRequest) =>
  useInfiniteQuery({
    queryKey: ["saved-tracks"],
    queryFn: ({ pageParam }) => getSaved({ url: pageParam, limit }),
    initialPageParam: `/me/tracks?limit=${limit}&offset=${offset}`,
    getNextPageParam: (lastPage) => lastPage.next || undefined,
    getPreviousPageParam: (firstPage) => firstPage.previous || undefined,
  });

export const useRecentlyPlayedGlimpse = ({
  offset = 0,
  limit = 20,
}: GetRecentlyPlayedRequest) =>
  useQuery({
    queryKey: ["top-tracks", "glimpse", { limit, offset }],
    queryFn: () => getRecentlyPlayed({ limit, offset }),
  });

export const useRecentlyPlayed = ({
  limit = 20,
  offset = 0,
}: GetRecentlyPlayedRequest) =>
  useInfiniteQuery({
    queryKey: ["recently-played", "all"],
    queryFn: ({ pageParam }) => getRecentlyPlayed({ url: pageParam, limit }),
    initialPageParam: `/me/player/recently-played?limit=${limit}&offset=${offset}`,
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });

export const usePlaylistsGlimpse = () =>
  useQuery({
    queryKey: ["playlists", "glimpse"],
    queryFn: () => getPlaylists(),
  });
