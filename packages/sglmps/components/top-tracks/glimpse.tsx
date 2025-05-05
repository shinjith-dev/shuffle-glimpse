"use client";
import { useTopTracksGlimpse } from "@/queries";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo } from "react";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { opacity, THEME } from "@/lib";
import dayjs from "@/lib/dayjs";
import styles from "./style";
import TableHeader, { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useRouter from "@/hooks/useRouter";
import { useIsSavedTrack } from "@/queries/profile";
import { useIsSaved } from "@/store";
import TrackListItem from "../track/list-item";
import HeartPop from "../track/heart-pop";
import { useWidth } from "@/hooks";

const TopTracksGlimpse: React.FC = () => {
  const { data: topTracks } = useTopTracksGlimpse({
    limit: 5,
    timeRange: "long_term",
  });
  // const topTracks = undefined
  const { width } = useWindowDimensions();
  const { isMobile, contentWidth } = useWidth();
  const router = useRouter();
  useIsSavedTrack({
    enabled: !!topTracks,
    trackIds: topTracks?.items.map((t) => t.id) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width: width < 1500 ? (width < 1028 ? "90%" : "85%") : "50%",
      },
      { key: "saved", label: "", width: "5%" },
    ];

    return [
      ...base.slice(0, 2),
      ...(width >= 1500
        ? [{ key: "album.name", label: "Album", width: "35%" } as HeaderItem]
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
      topTracks?.items.map((t, index) => ({
        ...t,
        duration: dayjs({ milliseconds: t.duration_ms }).format(
          t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
        ),
        sino: index + 1,
        name: <TrackListItem track={t} />,
        saved: isSaved(t.id) ? <HeartPop /> : null,
      })) || [],
    [topTracks, savedDep, width],
  );

  return (
    <YStack style={[styles.glimpse, isMobile && { gap: 12 }]}>
      <XStack
        style={[styles.glimpseHeader, isMobile && { paddingHorizontal: 12 }]}
      >
        <Text variant={isMobile ? "heading5" : "heading4"}>
          Top Songs this Year
        </Text>

        <TextButton
          size={isMobile ? "sm" : "md"}
          color="primary"
          onClick={() => router.push("/top-tracks")}
        >
          View all
        </TextButton>
      </XStack>

      <View style={styles.glimpseTable}>
        {topTracks ? (
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

export default TopTracksGlimpse;
