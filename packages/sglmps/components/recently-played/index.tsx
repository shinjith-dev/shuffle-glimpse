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
import { useIsSavedTrack, useRecentlyPlayed } from "@/queries/profile";
import TrackListItem from "../track/list-item";
import { useIsSaved } from "@/store";
import HeartPop from "../track/heart-pop";
import useRouter from "@/hooks/useRouter";

const RecentlyPlayed: React.FC = () => {
  const { data: recent, hasNextPage, fetchNextPage } = useRecentlyPlayed({});
  useIsSavedTrack({
    enabled: !!recent,
    trackIds:
      recent?.pages[recent?.pages.length - 1 || 0].items.map(
        (t) => t.track.id,
      ) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();
  const { width } = useWindowDimensions();
  const router = useRouter();

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      { key: "name", label: "Name", width: width < 1500 ? "70%" : "40%" },
      { key: "playedAt", label: "Played At", width: "15%" },
      { key: "saved", label: "" },
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
    ];

    return [
      ...base.slice(0, 2),
      ...(width >= 1500
        ? [{ key: "album.name", label: "Album", width: "30%" } as HeaderItem]
        : []),
      ...base.slice(2),
    ];
  }, [width]);

  const tracks = useMemo(
    () =>
      recent?.pages
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
                playedAt: formatToDisplay(item.played_at),
                saved: isSaved(t.id) ? <HeartPop /> : null,
              };
            }),
          [],
        )
        .flat() || [],
    [recent, savedDep],
  );

  return (
    <YStack style={styles.saved}>
      <XStack style={styles.header}>
        <Text variant="heading3">Recently Played</Text>
      </XStack>

      <View style={styles.contents}>
        {recent ? (
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

export default RecentlyPlayed;
