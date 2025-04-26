"use client";

import { OutlinedButton, TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { useQueryClient } from "@tanstack/react-query";
import { getTopArtists } from "@/api";
import { timeRanges } from "@/constants";
import { Fragment, useEffect, useState } from "react";
import { useTopArtistsGlimpse } from "@/queries";
import Text from "@/ui/text";
import TopArtistsArtist from "./artist";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { THEME } from "@/lib";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { View } from "react-native";
import useRouter from "@/hooks/useRouter";

const TopArtistsGlimpse: React.FC = () => {
  const queryClient = useQueryClient();
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const { width } = useWindowDimensions();
  const ARTIST_COUNT = Math.max(Math.floor((width - 416) / 208), 1);
  const { data: topArtists } = useTopArtistsGlimpse({
    limit: ARTIST_COUNT,
    timeRange,
  });
  const router = useRouter();

  useEffect(() => {
    timeRanges.forEach((range) => {
      queryClient.prefetchQuery({
        queryKey: [
          "top-artists",
          { limit: ARTIST_COUNT, offeset: 0, timeRange: range.key },
        ],
        queryFn: () =>
          getTopArtists({
            limit: ARTIST_COUNT,
            offset: 0,
            timeRange: range.key,
          }),
      });
    });
  }, [queryClient]);

  return (
    <YStack style={styles.glimpse}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading2">Top Artists</Text>

        <XStack gap={4} alignItems="center">
          {timeRanges.map((tp) => (
            <TextButton
              size="sm"
              key={tp.key}
              onClick={() => setTimeRange(tp.key)}
              color={tp.key === timeRange ? "brand" : "primary"}
              disabled={tp.key === timeRange}
            >
              {tp.label}
            </TextButton>
          ))}

          <OutlinedButton
            size="sm"
            color="primary"
            style={{ marginLeft: 12 }}
            onClick={() => router.push("/top-artists")}
          >
            View All
          </OutlinedButton>
        </XStack>
      </XStack>

      <View style={styles.glimpseArtists}>
        {topArtists ? (
          topArtists.items.map((a) => (
            <TopArtistsArtist key={a.id} artist={a} />
          ))
        ) : (
          <ContentLoader
            speed={1}
            width={width - 416}
            height={248}
            viewBox={`0 0 ${width - 416} 248`}
            backgroundColor={THEME.color["bg-10"]}
            foregroundColor={THEME.color["bg-30"]}
          >
            {[...new Array(ARTIST_COUNT)].map((_, index) => (
              <Fragment key={`top-artists-skeleton-${index}`}>
                <Circle cy="90" cx={90 * (index + 1) + 118 * index} r="90" />
                <Rect
                  y="192"
                  x={40 * (index + 1) + 168 * index}
                  rx="8"
                  ry="8"
                  width={100}
                  height="20"
                />
              </Fragment>
            ))}
          </ContentLoader>
        )}
      </View>
    </YStack>
  );
};

export default TopArtistsGlimpse;
