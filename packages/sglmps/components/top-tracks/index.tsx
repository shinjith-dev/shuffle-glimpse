"use client";
import { useTopTracksInfinitely } from "@/queries";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useState } from "react";
import TopTracksTrack from "./track";
import { ScrollView, View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { THEME } from "@/lib";
import dayjs from "@/lib/dayjs";
import styles from "./style";
import { timeRanges } from "@/constants";
import TableHeader from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const TopTracks: React.FC = () => {
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const {
    data: topTracks,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useTopTracksInfinitely({ timeRange });
  const { width } = useWindowDimensions();

  const limitedTotal = topTracks?.pages?.[0].total
    ? topTracks?.pages?.[0].total > 100
      ? 100
      : topTracks?.pages?.[0].total
    : "Songs";

  return (
    <YStack style={styles.topContainer}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading2">Your Top {limitedTotal}</Text>

        <XStack gap={4}>
          {timeRanges.map((tp) => (
            <TextButton
              key={tp.key}
              size="sm"
              onClick={() => setTimeRange(tp.key)}
              color={tp.key === timeRange ? "brand" : "primary"}
              disabled={isLoading || tp.key === timeRange}
            >
              {tp.label}
            </TextButton>
          ))}
        </XStack>
      </XStack>

      <View style={styles.topContent}>
        {topTracks ? (
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
            data={topTracks.pages
              .map(
                (page, pageIndex) =>
                  page.items.map((t, index) => ({
                    ...t,
                    duration: dayjs({ milliseconds: t.duration_ms }).format(
                      t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
                    ),
                    sino: pageIndex * 20 + index + 1,
                    name: <TopTracksTrack track={t} />,
                  })),
                [],
              )
              .flat()}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={1}
          />
        ) : (
          <Fragment>
            <TableHeader
              header={[
                { key: "sino", label: "#", width: "10%" },
                { key: "name", label: "Name", width: "50%" },
                { key: "album.name", label: "Album", width: "30%" },
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
            />

            <ContentLoader
              speed={1.5}
              width={width - 416}
              height={504}
              viewBox={`0 0 ${width - 416} 504`}
              backgroundColor={THEME.color["bg-10"]}
              foregroundColor={THEME.color["bg-30"]}
            >
              {[...new Array(7)].map((_, index) => (
                <Fragment key={`top-tracks-skeleton-${index}`}>
                  <Circle cx="68" cy={36 * (index + 1) + 36 * index} r="24" />
                  <Rect
                    x="100"
                    y={12 * (index + 1) + 60 * index}
                    rx="8"
                    ry="8"
                    width={width - 516}
                    height="48"
                  />
                </Fragment>
              ))}
            </ContentLoader>
          </Fragment>
        )}
      </View>
    </YStack>
  );
};

export default TopTracks;
