"use client";
import { useTopTracks } from "@/queries";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { useEffect, useState } from "react";
import TopTracksTrack from "./track";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { THEME } from "@/lib";
import dayjs from "@/lib/dayjs";
import styles from "./style";
import { useQueryClient } from "@tanstack/react-query";
import { getTopTracks } from "@/api";
import { timeRanges } from "@/constants";

const TopTracksGlimpse: React.FC = () => {
  const queryClient = useQueryClient();
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const { data: topTracks } = useTopTracks({ limit: 7, timeRange });

  useEffect(() => {
    timeRanges.forEach((range) => {
      queryClient.prefetchQuery({
        queryKey: ["top-tracks", { limit: 7, page: 1, timeRange: range.key }],
        queryFn: () =>
          getTopTracks({ limit: 7, page: 1, timeRange: range.key }),
      });
    });
  }, [queryClient]);

  return (
    <YStack style={styles.glimpse}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading2">Top Tracks</Text>

        <XStack gap={4}>
          {timeRanges.map((tp) => (
            <TextButton
              key={tp.key}
              size="sm"
              onClick={() => setTimeRange(tp.key)}
              color={tp.key === timeRange ? "brand" : "primary"}
              disabled={tp.key === timeRange}
            >
              {tp.label}
            </TextButton>
          ))}
        </XStack>
      </XStack>

      {topTracks && (
        <View style={styles.glimpseTable}>
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
