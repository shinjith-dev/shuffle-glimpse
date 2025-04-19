"use client";

import { TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { timeRanges } from "@/constants";
import { Fragment, useState } from "react";
import Text from "@/ui/text";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { THEME } from "@/lib";

const TopArtistsGlimpseLoading: React.FC = () => {
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const { width } = useWindowDimensions();

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

      <XStack style={styles.glimpseArtists}>
        <ContentLoader
          speed={1.5}
          width={width - 416}
          height={248}
          viewBox={`0 0 ${width - 416} 248`}
          backgroundColor={THEME.color["bg-10"]}
          foregroundColor={THEME.color["bg-30"]}
        >
          {[...new Array(7)].map((_, index) => (
            <Fragment key={`top-tracks-skeleton-${index}`}>
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
      </XStack>
    </YStack>
  );
};

export default TopArtistsGlimpseLoading;
