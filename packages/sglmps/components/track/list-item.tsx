import { Icon, IconButton, XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Text from "@/ui/text";
import { memo } from "react";
import styles from "./style";
import { View } from "react-native";
import { THEME } from "@/lib";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import dayjs from "@/lib/dayjs";
import { useWidth } from "@/hooks";
import useRouter from "@/hooks/useRouter";

interface Props {
  track: TrackItem | AlbumTrack;
  album: TrackAlbum | Album;
}

const TrackListItem: React.FC<Props> = memo(({ track, album }) => {
  const { width } = useWindowDimensions();
  const { isMobile } = useWidth();
  const router = useRouter();
  const image =
    album.images && album.images.length > 0
      ? album.images.reduce<ImageResponse>(
          (prev, img) =>
            img.width > 40 && img.width < (prev?.width || 0) ? img : prev,
          album.images[0],
        )
      : undefined;

  return (
    <XStack style={styles.trackItem}>
      <XStack flex={1} gap={12} style={{ maxWidth: "95%" }}>
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
            {width < 1500 && ` · ${album.name}`}
            {width < 1028 &&
              ` · ${dayjs({ milliseconds: track.duration_ms }).format(
                track.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
              )}`}
          </Text>
        </YStack>
      </XStack>
      <IconButton
        style={{ flexShrink: 0, marginLeft: 24 }}
        size="sm"
        variant="ghost"
        onClick={() => router.push(track.external_urls.spotify)}
        title="Open in Spotify"
      >
        <Image
          width={64}
          height={64}
          alt="spotify-logo"
          src={require("@/assets/images/spotify-white.svg")}
          style={{ height: 24, width: 24 }}
          objectFit="contain"
        />
      </IconButton>
    </XStack>
  );
});

export default TrackListItem;
