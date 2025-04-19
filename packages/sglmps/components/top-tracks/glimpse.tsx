"use client";
import { useTopTracks } from "@/queries/tracks";
import { YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React from "react";
import TopTracksTrack from "./track";
import { View } from "react-native";
import { Icon } from "@/ui";
import { THEME } from "@/lib";
import dayjs from "@/lib/dayjs";

const TopTracksGlimpse: React.FC = () => {
  const { data: topTracks } = useTopTracks({ limit: 5 });

  return (
    <YStack
      gap={12}
      style={{ width: "100%", maxHeight: "100%", overflow: "hidden" }}
    >
      <Text variant="heading1">Top tracks this month</Text>
      {topTracks && (
        <View style={{ flexGrow: 1, width: "100%" }}>
          <Table
            header={[
              { key: "sino", label: "#" },
              { key: "name", label: "Name", width: "50%" },
              { key: "album.name", label: "Album", width: "35%" },
              {
                key: "duration",
                label: (
                  <Icon
                    name="hugeicons:time-quarter-02"
                    size={16}
                    color={THEME.color["bg-80"]}
                  />
                ),
                width: "10%",
              },
            ]}
            data={topTracks?.items.map((t, index) => ({
              ...t,
              duration: dayjs({ milliseconds: t.duration_ms }).format(
                t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
              ),
              sino: index + 1,
              name: <TopTracksTrack track={t} />,
            }))}
          />
        </View>
      )}
    </YStack>
  );
};

export default TopTracksGlimpse;
