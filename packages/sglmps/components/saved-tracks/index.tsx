"use client";

import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo } from "react";
import { View } from "react-native";
import { Icon } from "@/ui";
import { THEME } from "@/lib";
import dayjs, { formatToDisplay } from "@/lib/dayjs";
import styles from "./style";
import TableHeader, { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useSaved } from "@/queries/profile";
import TrackListItem from "../track/list-item";
import useRouter from "@/hooks/useRouter";

const SavedTracks: React.FC = () => {
  const { data: topTracks, hasNextPage, fetchNextPage } = useSaved({});
  const { width } = useWindowDimensions();
  const router = useRouter();

  const headers = useMemo<HeaderItem[]>(
    () => [
      { key: "sino", label: "#" },
      { key: "name", label: "Name", width: "40%" },
      { key: "album.name", label: "Album", width: "35%" },
      { key: "addedOn", label: "Added On", width: "15%" },
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
    ],
    [],
  );

  const tracks = useMemo(
    () =>
      topTracks?.pages
        .map(
          (page, pageIndex) =>
            page.items.map((item, index) => {
              const t = item.track;
              return {
                ...t,
                duration: dayjs({ milliseconds: t.duration_ms }).format(
                  t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
                ),
                sino: pageIndex * 20 + index + 1,
                name: <TrackListItem track={t} />,
                addedOn: formatToDisplay(item.added_at),
              };
            }),
          [],
        )
        .flat() || [],
    [topTracks],
  );

  return (
    <YStack style={styles.saved}>
      <XStack style={styles.header}>
        <Text variant="heading3">Liked Songs</Text>
      </XStack>

      <View style={styles.contents}>
        {topTracks ? (
          <Table
            header={headers}
            data={tracks}
            onRowClick={(id) => router.push(`/track/${id}`)}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={1}
          />
        ) : (
          <Fragment>
            <TableHeader header={headers} />

            <ContentLoader
              speed={1}
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

export default SavedTracks;
