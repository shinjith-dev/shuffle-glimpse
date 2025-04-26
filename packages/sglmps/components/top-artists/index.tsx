"use client";

import { TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { timeRanges } from "@/constants";
import { Fragment, useEffect, useState } from "react";
import { useTopArtists } from "@/queries";
import Text from "@/ui/text";
import TopArtistsArtist from "./artist";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ScrollView } from "react-native";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { THEME } from "@/lib";

const TopArtists: React.FC = () => {
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const {
    data: topArtists,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useTopArtists({ timeRange });
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (hasNextPage) fetchNextPage();
  }, [topArtists]);

  const limitedTotal = topArtists?.pages?.[0].total
    ? topArtists?.pages?.[0].total > 50
      ? 50
      : topArtists?.pages?.[0].total
    : "";

  return (
    <YStack style={styles.topContainer}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading3">Your Top {limitedTotal} Artists</Text>

        <XStack gap={4}>
          {timeRanges.map((tp) => (
            <TextButton
              key={tp.key}
              onClick={() => setTimeRange(tp.key)}
              color={tp.key === timeRange ? "brand" : "primary"}
              disabled={isLoading || tp.key === timeRange}
            >
              {tp.label}
            </TextButton>
          ))}
        </XStack>
      </XStack>
      <ScrollView
        style={styles.topContent}
        contentContainerStyle={styles.glimpseArtists}
      >
        {topArtists ? (
          topArtists.pages.map((page) =>
            page.items.map((a) => <TopArtistsArtist key={a.id} artist={a} />),
          )
        ) : (
          <ContentLoader
            speed={1}
            width={width - 416}
            height={248}
            viewBox={`0 0 ${width - 416} 248`}
            backgroundColor={THEME.color["bg-10"]}
            foregroundColor={THEME.color["bg-30"]}
          >
            {[...new Array(7)].map((_, index) => (
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
      </ScrollView>
    </YStack>
  );
};

export default TopArtists;
