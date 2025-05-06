"use client";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo } from "react";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { opacity, THEME } from "@/lib";
import dayjs, { formatToDisplay } from "@/lib/dayjs";
import styles from "./style";
import { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useRouter from "@/hooks/useRouter";
import { useIsSavedTrack, useRecentlyPlayedGlimpse } from "@/queries/profile";
import TrackListItem from "../track/list-item";
import { useWidth } from "@/hooks";
import HeartPop from "../track/heart-pop";
import { useIsSaved } from "@/store";

const RecentlyPlayedGlimpse: React.FC = () => {
  const { data: recent } = useRecentlyPlayedGlimpse({ limit: 5 });
  const { width } = useWindowDimensions();
  const { isMobile, contentWidth } = useWidth();
  const router = useRouter();
  useIsSavedTrack({
    enabled: !!recent,
    trackIds: recent?.items.map((t) => t.track.id) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width: width < 1500 ? (width < 1028 ? "83%" : "85%") : "45%",
      },
      { key: "saved", label: "", width: "5%" },
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
          name: <TrackListItem track={t} album={t.album} />,
          playedAt: formatToDisplay(item.played_at),
          album: width >= 1500 ? t.album.name : undefined,
          saved: isSaved(t.id) ? <HeartPop /> : null,
          disabled: !t?.is_playable,
        };
      }) || [],
    [recent, width, savedDep],
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
          <ContentLoader
            speed={1}
            width={contentWidth}
            height={isMobile ? 320 : 360}
            viewBox={`0 0 ${contentWidth} ${isMobile ? 320 : 360}`}
            backgroundColor={opacity(THEME.color.fg, 0.05)}
            foregroundColor={opacity(THEME.color.fg, 0.2)}
          >
            {[...new Array(5)].map((_, index) => (
              <Fragment key={`top-tracks-skeleton-${index}`}>
                <Rect
                  x="8"
                  y={(isMobile ? 24 : 28) + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={16}
                  height={12}
                />
                <Rect
                  x="50"
                  y={12 + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 40 : 48}
                  height={isMobile ? 40 : 48}
                />
                <Rect
                  x={isMobile ? 100 : 108}
                  y={16 + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 240 : 400}
                  height={isMobile ? 16 : 20}
                />
                <Rect
                  x={isMobile ? 100 : 108}
                  y={(isMobile ? 38 : 44) + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 160 : 300}
                  height={12}
                />
                {width >= 1028 && (
                  <Rect
                    x="88%"
                    y={28 + index * 72}
                    rx="4"
                    ry="4"
                    width={40}
                    height={12}
                  />
                )}
              </Fragment>
            ))}
          </ContentLoader>
        )}
      </View>
    </YStack>
  );
};

export default RecentlyPlayedGlimpse;
