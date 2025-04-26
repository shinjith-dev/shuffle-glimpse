import { checkIsSavedTrack } from "@/api/profile";
import { useIsSaved } from "@/store/is-saved";
import { useQuery } from "@tanstack/react-query";

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
