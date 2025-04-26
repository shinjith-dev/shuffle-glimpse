import { Icon, XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Text from "@/ui/text";
import { memo } from "react";
import styles from "./style";
import { View } from "react-native";
import { THEME } from "@/lib";

interface Props {
  track: TrackItem;
}

const TrackListItem: React.FC<Props> = memo(({ track }) => {
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
          style={styles.trackItemThumb}
        />
      ) : (
        <View style={[styles.trackItemThumb, styles.trackItemPlaceholder]}>
          <Icon
            name="hugeicons:music-note-03"
            color={THEME.color["bg-40"]}
            size={24}
          />
        </View>
      )}
      <YStack gap={4} style={{ maxWidth: "90%" }}>
        <Text variant="body1" numberOfLines={1}>
          {track.name}
        </Text>
        <Text variant="body2" numberOfLines={1}>
          {track.artists.map((a) => a.name).join(", ")}
        </Text>
      </YStack>
    </XStack>
  );
});

export default TrackListItem;
