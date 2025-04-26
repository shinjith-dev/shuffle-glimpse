"use client";
import { useTopTracksGlimpse } from "@/queries";
import { XStack, YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React, { Fragment, useMemo } from "react";
import { View } from "react-native";
import { Icon, TextButton } from "@/ui";
import { THEME } from "@/lib";
import dayjs from "@/lib/dayjs";
import styles from "./style";
import TableHeader, { HeaderItem } from "@/ui/table/header";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useRouter from "@/hooks/useRouter";
import { useIsSavedTrack } from "@/queries/profile";
import { useIsSaved } from "@/store/is-saved";
import TrackListItem from "../track/list-item";
import HeartPop from "../track/heart-pop";

const TopTracksGlimpse: React.FC = () => {
  const { data: topTracks } = useTopTracksGlimpse({
    limit: 5,
    timeRange: "long_term",
  });
  const { width } = useWindowDimensions();
  const router = useRouter();
  useIsSavedTrack({
    enabled: !!topTracks,
    trackIds: topTracks?.items.map((t) => t.id) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();

  const headers = useMemo<HeaderItem[]>(
    () => [
      { key: "sino", label: "#" },
      { key: "name", label: "Name", width: "50%" },
      { key: "album.name", label: "Album", width: "35%" },
      { key: "saved", label: "", width: "5%" },
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
      topTracks?.items.map((t, index) => ({
        ...t,
        duration: dayjs({ milliseconds: t.duration_ms }).format(
          t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
        ),
        sino: index + 1,
        name: <TrackListItem track={t} />,
        saved: isSaved(t.id) ? <HeartPop /> : null,
      })) || [],
    [topTracks, savedDep],
  );

  return (
    <YStack style={styles.glimpse}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading4">Top Songs this Year</Text>

        <TextButton color="primary" onClick={() => router.push("/top-tracks")}>
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

export default TopTracksGlimpse;
