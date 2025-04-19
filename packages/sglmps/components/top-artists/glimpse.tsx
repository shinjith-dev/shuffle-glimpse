"use client";

import { TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { useQueryClient } from "@tanstack/react-query";
import { getTopArtists } from "@/api";
import { timeRanges } from "@/constants";
import { useEffect, useState } from "react";
import { useTopArtists } from "@/queries";
import Text from "@/ui/text";
import TopArtistsArtist from "./artist";

const TopArtistsGlimpse: React.FC = () => {
  const queryClient = useQueryClient();
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const { data: topArtists } = useTopArtists({ limit: 7, timeRange });

  useEffect(() => {
    timeRanges.forEach((range) => {
      queryClient.prefetchQuery({
        queryKey: ["top-artists", { limit: 7, page: 1, timeRange: range.key }],
        queryFn: () =>
          getTopArtists({ limit: 7, page: 1, timeRange: range.key }),
      });
    });
  }, [queryClient]);

  return (
    <YStack style={styles.glimpse}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading2">Top Artists</Text>

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

      {topArtists && (
        <XStack style={styles.glimpseArtists}>
          {topArtists.items.map((a) => (
            <TopArtistsArtist key={a.id} artist={a} />
          ))}
        </XStack>
      )}
    </YStack>
  );
};

export default TopArtistsGlimpse;
