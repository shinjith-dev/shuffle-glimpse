"use client";

import { TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { timeRanges } from "@/constants";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useTopArtists } from "@/queries";
import Text from "@/ui/text";
import { ScrollView } from "react-native";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { THEME } from "@/lib";
import ArtistItem from "../artist/list-item";
import { useWidth } from "@/hooks";
import { AvatarSizes } from "@/ui/avatar/style";
import LinearGradient from "react-native-linear-gradient";
import Image from "@/ui/image";

const TopArtists: React.FC = () => {
  const [timeRange, setTimeRange] = useState<RequestTimeRange>("short_term");
  const {
    data: topArtists,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useTopArtists({ timeRange });
  const { isMobile, contentWidth } = useWidth();
  const AVATAR_WIDTH = isMobile ? AvatarSizes["5xl"] : AvatarSizes["8xl"];
  const ARTIST_COUNT = Math.max(
    Math.floor(contentWidth / (AVATAR_WIDTH + 28)),
    1,
  );

  useEffect(() => {
    if (hasNextPage) fetchNextPage();
  }, [topArtists]);

  const limitedTotal = topArtists?.pages?.[0].total
    ? topArtists?.pages?.[0].total > 50
      ? 50
      : topArtists?.pages?.[0].total
    : "";

  const artists = useMemo(
    () => topArtists?.pages.map((page) => page.items, []).flat() || [],
    [topArtists],
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
        <Text
          variant={isMobile ? "heading4" : "heading3"}
          style={{ paddingHorizontal: 8 }}
        >
          Your Top {limitedTotal} Artists
        </Text>

        <XStack
          gap={4}
          justifyContent={isMobile ? "flex-start" : "flex-end"}
          style={{ flexGrow: 1 }}
        >
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

      <ScrollView
        style={styles.topContent}
        contentContainerStyle={styles.topArtists}
      >
        {topArtists ? (
          artists.map((a) => <ArtistItem key={a.id} artist={a} />)
        ) : (
          <ContentLoader
            speed={1}
            width={contentWidth}
            height={(isMobile ? 192 : 230) * 2}
            viewBox={`0 0 ${contentWidth} ${(isMobile ? 192 : 230) * 2}`}
            backgroundColor={THEME.color["bg-10"]}
            foregroundColor={THEME.color["bg-30"]}
          >
            {[...new Array(ARTIST_COUNT)].map((_, index) => (
              <Fragment key={`top-artists-skeleton-${index}`}>
                <Circle
                  cy="90"
                  cx={(isMobile ? 68 : 104) + (isMobile ? 148 : 220) * index}
                  r={isMobile ? 60 : 90}
                />
                <Rect
                  y={isMobile ? 166 : 196}
                  x={(isMobile ? 20 : 40) + (isMobile ? 148 : 220) * index}
                  rx="8"
                  ry="8"
                  width={isMobile ? 100 : 120}
                  height="20"
                />
              </Fragment>
            ))}
            {[...new Array(ARTIST_COUNT)].map((_, index) => (
              <Fragment key={`top-artists-skeleton-2-${index}`}>
                <Circle
                  cy={isMobile ? 280 : 330}
                  cx={(isMobile ? 68 : 104) + (isMobile ? 148 : 220) * index}
                  r={isMobile ? 60 : 90}
                />
                <Rect
                  y={isMobile ? 356 : 436}
                  x={(isMobile ? 20 : 40) + (isMobile ? 148 : 220) * index}
                  rx="8"
                  ry="8"
                  width={isMobile ? 100 : 120}
                  height="20"
                />
              </Fragment>
            ))}
          </ContentLoader>
        )}
      </ScrollView>
    </YStack>
  );
};

export default TopArtists;
