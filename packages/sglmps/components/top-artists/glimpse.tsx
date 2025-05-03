"use client";

import { TextButton, XStack, YStack } from "@/ui";
import styles from "./style";
import { Fragment } from "react";
import { useTopArtistsGlimpse } from "@/queries";
import Text from "@/ui/text";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { THEME } from "@/lib";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { View } from "react-native";
import useRouter from "@/hooks/useRouter";
import ArtistItem from "../artist/list-item";
import { useWidth } from "@/hooks";
import { AvatarSizes } from "@/ui/avatar/style";

const TopArtistsGlimpse: React.FC = () => {
  const { width } = useWindowDimensions();
  const { isMobile, isTab } = useWidth();
  const RESERVED_WIDTH = isMobile ? 0 : isTab ? 116 : 416;
  const AVATAR_WIDTH = isMobile ? AvatarSizes["5xl"] : AvatarSizes["8xl"];
  const ARTIST_COUNT = Math.max(
    Math.floor((width - RESERVED_WIDTH) / (AVATAR_WIDTH + 28)),
    5,
  );
  const { data: topArtists } = useTopArtistsGlimpse({
    limit: ARTIST_COUNT,
    timeRange: "long_term",
  });
  const router = useRouter();

  return (
    <YStack style={[styles.glimpse, isMobile && { gap: 12 }]}>
      <XStack
        style={[styles.glimpseHeader, isMobile && { paddingHorizontal: 12 }]}
      >
        <Text variant={isMobile ? "heading5" : "heading4"}>
          Top Artists this Year
        </Text>

        <TextButton
          size={isMobile ? "sm" : "md"}
          color="primary"
          onClick={() => router.push("/top-artists")}
        >
          View all
        </TextButton>
      </XStack>

      <View style={styles.glimpseArtists}>
        {topArtists ? (
          topArtists.items.map((a) => <ArtistItem key={a.id} artist={a} />)
        ) : (
          <ContentLoader
            speed={1}
            width={width - RESERVED_WIDTH}
            height={248}
            viewBox={`0 0 ${width - RESERVED_WIDTH} 248`}
            backgroundColor={THEME.color["bg-10"]}
            foregroundColor={THEME.color["bg-30"]}
          >
            {[...new Array(ARTIST_COUNT)].map((_, index) => (
              <Fragment key={`top-artists-skeleton-${index}`}>
                <Circle cy="90" cx={90 * (index + 1) + 118 * index} r="90" />
                <Rect
                  y="192"
                  x={40 * (index + 1) + 168 * index}
                  rx="8"
                  ry="8"
                  width={100}
                  height="20"
                />
              </Fragment>
            ))}
          </ContentLoader>
        )}
      </View>
    </YStack>
  );
};

export default TopArtistsGlimpse;
