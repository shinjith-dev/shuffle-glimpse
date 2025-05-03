import { Icon, XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Text from "@/ui/text";
import { memo } from "react";
import styles from "./style";
import { View } from "react-native";
import { THEME } from "@/lib";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import dayjs from "@/lib/dayjs";
import { useWidth } from "@/hooks";

interface Props {
  track: PlaylistTracks;
}

const TrackListItem: React.FC<Props> = memo(({ track }) => {
  const { width } = useWindowDimensions();
  const { isMobile } = useWidth();
  const image =
    track.album.images.length > 0
      ? track.album.images.reduce<ImageResponse>(
          (prev, img) =>
            img.width > 40 && img.width < (prev?.width || 0) ? img : prev,
          track.album.images[0],
        )
      : undefined;

  return (
    <XStack style={styles.trackItem}>
      {image ? (
        <Image
          width={image.width}
          height={image.height}
          alt="thumbnail"
          src={image.url}
          style={{
            width: isMobile ? 40 : 48,
            height: isMobile ? 40 : 48,
            borderRadius: 4,
            backgroundColor: THEME.color["bg-20"],
          }}
        />
      ) : (
        <View
          style={[
            {
              width: isMobile ? 40 : 48,
              height: isMobile ? 40 : 48,
              borderRadius: 4,
              backgroundColor: THEME.color["bg-20"],
            },
            styles.trackItemPlaceholder,
          ]}
        >
          <Icon
            name="hugeicons:music-note-03"
            color={THEME.color["bg-40"]}
            size={isMobile ? 20 : 24}
          />
        </View>
      )}
      <YStack gap={4} style={{ maxWidth: "90%" }}>
        <Text variant={isMobile ? "body2" : "body1"} numberOfLines={1}>
          {track.name}
        </Text>
        <Text
          variant={isMobile ? "body3" : "body2"}
          color={THEME.color["bg-80"]}
          numberOfLines={1}
        >
          {track.artists.map((a) => a.name).join(", ")}
          {width < 1500 && ` · ${track.album.name}`}
          {width < 1028 &&
            ` · ${dayjs({ milliseconds: track.duration_ms }).format(
              track.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
            )}`}
        </Text>
      </YStack>
    </XStack>
  );
});

export default TrackListItem;
