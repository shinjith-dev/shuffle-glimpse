import { checkIsSavedTrack, getRecentlyPlayed, getSaved } from "@/api/profile";
import { useIsSaved } from "@/store/is-saved";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

export const useRecentlyPlayed = ({
  limit = 20,
  offset = 0,
}: GetRecentlyPlayedRequest) =>
  useInfiniteQuery({
    queryKey: ["recently-played"],
    queryFn: ({ pageParam }) => getRecentlyPlayed({ url: pageParam, limit }),
    initialPageParam: `/me/player/recently-played?limit=${limit}&offset=${offset}`,
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });
