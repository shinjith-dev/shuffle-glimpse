interface IsSavedStore {
  tracks: Record<string, boolean>;
  upsertTracks: (ids: string[], statuses: boolean[]) => void;
  check: (id: string) => boolean;
  clear: () => void;
}
