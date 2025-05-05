"use client";
import { useTopTracks } from "@/queries";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo, useState } from "react";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { THEME } from "@/lib";
import dayjs from "@/lib/dayjs";
import styles from "./style";
import { timeRanges } from "@/constants";
import TableHeader, { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useIsSavedTrack } from "@/queries/profile";
import { useIsSaved } from "@/store";
import TrackListItem from "../track/list-item";
import HeartPop from "../track/heart-pop";
import useRouter from "@/hooks/useRouter";
import { useWidth } from "@/hooks";
import LinearGradient from "react-native-linear-gradient";
import Image from "@/ui/image";

const TopTracks: React.FC = () => {
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const {
    data: topTracks,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useTopTracks({ timeRange });
  useIsSavedTrack({
    enabled: !!topTracks,
    trackIds:
      topTracks?.pages[topTracks?.pages.length - 1 || 0].items.map(
        (t) => t.id,
      ) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();
  const { width } = useWindowDimensions();
  const { isMobile, contentWidth } = useWidth();
  const router = useRouter();

  const limitedTotal = useMemo(
    () =>
      topTracks?.pages?.[0].total
        ? topTracks?.pages?.[0].total > 100
          ? 100
          : topTracks?.pages?.[0].total
        : "Songs",
    [topTracks],
  );

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width: width < 1500 ? "85%" : "50%",
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
      topTracks?.pages
        .map(
          (page, pageIndex) =>
            page.items.map((t, index) => ({
              ...t,
              duration: dayjs({ milliseconds: t.duration_ms }).format(
                t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
              ),
              sino: pageIndex * 20 + index + 1,
              name: <TrackListItem track={t} />,
              saved: isSaved(t.id) ? <HeartPop /> : null,
            })),
          [],
        )
        .flat() || [],
    [topTracks, savedDep],
  );

  return (
    <YStack
      style={[styles.topContainer, isMobile && styles.topContainerMobile]}
    >
      {!isMobile && (
        <Fragment>
          <LinearGradient
            style={styles.gradient}
            colors={[THEME.color.bg, "transparent", "transparent"]}
            locations={[0, 0.3, 1]}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0, y: 0.8 }}
          />
          <Image
            width={128}
            height={128}
            alt="logo"
            src={require("@/assets/images/text-spotify.svg")}
            style={{
              top: 28,
              right: 20,
              position: "absolute",
              height: isMobile ? 36 : 44,
              width: isMobile ? 100 : 120,
            }}
            objectFit="contain"
          />
        </Fragment>
      )}

      <XStack
        style={[
          styles.glimpseHeader,
          isMobile && styles.topHeaderMobile,
          !isMobile && { paddingRight: 140 },
        ]}
      >
        {isMobile && (
          <Image
            width={128}
            height={128}
            alt="logo"
            src={require("@/assets/images/text-spotify.svg")}
            style={{
              top: 20,
              right: 20,
              position: "absolute",
              height: isMobile ? 36 : 44,
              width: isMobile ? 100 : 120,
            }}
            objectFit="contain"
          />
        )}
        <Text
          variant={isMobile ? "heading4" : "heading3"}
          style={{ paddingHorizontal: 8 }}
        >
          Your Top {limitedTotal}
        </Text>

        <XStack gap={4} justifyContent="flex-end" style={{ flexGrow: 1 }}>
          {timeRanges.map((tp) => (
            <TextButton
              key={tp.key}
              size={isMobile ? "sm" : "md"}
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
            header={headers}
            data={tracks}
            hideHeader={isMobile}
            onRowClick={(id) => router.push(`/track/${id}`)}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={1}
          />
        ) : (
          <Fragment>
            {!isMobile && <TableHeader header={headers} />}

            <ContentLoader
              speed={1}
              width={contentWidth}
              height={isMobile ? 320 : 360}
              viewBox={`0 0 ${contentWidth} ${isMobile ? 320 : 360}`}
              backgroundColor={THEME.color["bg-10"]}
              foregroundColor={THEME.color["bg-30"]}
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
                  {width >= 1500 && (
                    <Rect
                      x="50%"
                      y={28 + index * 72}
                      rx="4"
                      ry="4"
                      width="25%"
                      height={16}
                    />
                  )}
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
          </Fragment>
        )}
      </View>
    </YStack>
  );
};

export default TopTracks;
