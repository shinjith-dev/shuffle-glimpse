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
import ContentLoader, { Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useSaved } from "@/queries/profile";
import TrackListItem from "../track/list-item";
import useRouter from "@/hooks/useRouter";
import { useWidth } from "@/hooks";
import LinearGradient from "react-native-linear-gradient";
import Image from "@/ui/image";

const SavedTracks: React.FC = () => {
  const { data: topTracks, hasNextPage, fetchNextPage } = useSaved({});
  const { width } = useWindowDimensions();
  const { isMobile, contentWidth } = useWidth();
  const router = useRouter();

  const headers = useMemo<HeaderItem[]>(() => {
    const base: HeaderItem[] = [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width:
          width < 1500
            ? width < THEME.breakPoints.mobile
              ? "95%"
              : "75%"
            : "40%",
      },
    ];

    return [
      ...base.slice(0, 2),
      ...(width >= 1500
        ? [{ key: "album.name", label: "Album", width: "35%" } as HeaderItem]
        : []),
      ...(width >= THEME.breakPoints.mobile
        ? [
            {
              key: "addedOn",
              label: "Added On",
              width: width < 1028 ? "25%" : "15%",
            } as HeaderItem,
          ]
        : []),
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
            page.items.map((item, index) => {
              const t = item.track;
              return {
                ...t,
                duration: dayjs({ milliseconds: t.duration_ms }).format(
                  t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
                ),
                sino: pageIndex * 20 + index + 1,
                name: <TrackListItem album={t.album} track={t} />,
                addedOn: formatToDisplay(item.added_at),
                disabled: !t?.is_playable,
              };
            }),
          [],
        )
        .flat() || [],
    [topTracks],
  );

  return (
    <YStack style={[styles.saved, isMobile && styles.savedMobile]}>
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
              height: 44,
              width: 120,
            }}
            objectFit="contain"
          />
        </Fragment>
      )}

      <XStack
        style={[
          styles.header,
          isMobile && styles.headerMobile,
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
              top: 16,
              right: 12,
              position: "absolute",
              height: 36,
              width: 100,
            }}
            objectFit="contain"
          />
        )}

        <Text variant={isMobile ? "heading4" : "heading3"}>Liked Songs</Text>
      </XStack>

      <View style={styles.contents}>
        {topTracks ? (
          <Table
            header={headers}
            data={tracks}
            hideHeader={isMobile}
            onRowClick={(id) => router.push(`/track/${id}`)}
            onEndReached={() => hasNextPage && fetchNextPage()}
            contentContainerStyle={isMobile && { paddingBottom: 68 }}
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
                    width={240}
                    height={isMobile ? 16 : 20}
                  />
                  <Rect
                    x={isMobile ? 100 : 108}
                    y={(isMobile ? 38 : 44) + index * (isMobile ? 64 : 72)}
                    rx="4"
                    ry="4"
                    width={160}
                    height={12}
                  />
                  {width >= 1500 && (
                    <Rect
                      x="41%"
                      y={28 + index * 72}
                      rx="4"
                      ry="4"
                      width="20%"
                      height={16}
                    />
                  )}
                  {width >= THEME.breakPoints.mobile && (
                    <Rect
                      x="74%"
                      y={28 + index * 72}
                      rx="4"
                      ry="4"
                      width="8%"
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

export default SavedTracks;
