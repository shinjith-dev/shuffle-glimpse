import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useIsSaved = create<IsSavedStore>()(
  devtools(
    immer((set, get) => ({
      tracks: {},
      upsertTracks: (ids, statuses) =>
        set((state) => {
          ids.forEach((id, index) => {
            state.tracks[id] = statuses[index];
          });
        }),
      check: (id) => get().tracks[id],
      clear: () =>
        set((state) => {
          state.tracks = {};
        }),
    })),
    { name: "is-saved" },
  ),
);
