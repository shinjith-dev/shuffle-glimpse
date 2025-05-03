"use client";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo } from "react";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { THEME } from "@/lib";
import dayjs, { formatToDisplay } from "@/lib/dayjs";
import styles from "./style";
import TableHeader, { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useRouter from "@/hooks/useRouter";
import { useIsSavedTrack, useRecentlyPlayedGlimpse } from "@/queries/profile";
import TrackListItem from "../track/list-item";
import { useWidth } from "@/hooks";

const RecentlyPlayedGlimpse: React.FC = () => {
  const { data: recent } = useRecentlyPlayedGlimpse({ limit: 5 });
  const { width } = useWindowDimensions();
  const { isMobile } = useWidth();
  const router = useRouter();
  useIsSavedTrack({
    enabled: !!recent,
    trackIds: recent?.items.map((t) => t.track.id) || [],
  });

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width: width < 1500 ? (width < 1028 ? "100%" : "90%") : "50%",
      },
    ];

    return [
      ...base.slice(0, 2),
      ...(width >= 1500
        ? [{ key: "album.name", label: "Album", width: "40%" } as HeaderItem]
        : []),
      ...base.slice(2),
      ...(width >= 1028
        ? [
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
            } as HeaderItem,
          ]
        : []),
    ];
  }, [width]);

  const tracks = useMemo(
    () =>
      recent?.items.map((item, index) => {
        const t = item.track;
        return {
          ...t,
          duration: dayjs({ milliseconds: t.duration_ms }).format(
            t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
          ),
          sino: index + 1,
          name: <TrackListItem track={t} />,
          playedAt: formatToDisplay(item.played_at),
          album: width >= 1500 ? t.album.name : undefined,
        };
      }) || [],
    [recent, width],
  );

  return (
    <YStack style={[styles.glimpse, isMobile && { gap: 12 }]}>
      <XStack
        style={[styles.glimpseHeader, isMobile && { paddingHorizontal: 12 }]}
      >
        <Text variant={isMobile ? "heading5" : "heading4"}>
          Recently Played
        </Text>

        <TextButton
          color="primary"
          size={isMobile ? "sm" : "md"}
          onClick={() => router.push("/recently-played")}
        >
          View All
        </TextButton>
      </XStack>

      <View style={styles.glimpseTable}>
        {recent ? (
          <Table
            hideHeader
            header={headers}
            data={tracks}
            onRowClick={(id) => router.push(`/track/${id}`)}
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
              {[...new Array(5)].map((_, index) => (
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

export default RecentlyPlayedGlimpse;
