"use client";
import { Button, Icon, XStack, YStack } from "@/ui";
import styles from "./style";
import { useTrack } from "@/queries";
import TrackGradient from "./gradient";
import { maxOfArray, THEME } from "@/lib";
import Image from "@/ui/image";
import { View } from "react-native";
import Text from "@/ui/text";
import dayjs from "@/lib/dayjs";
import LinearGradient from "react-native-linear-gradient";
import useRouter from "@/hooks/useRouter";

interface Props {
  trackId?: any;
}

const Track: React.FC<Props> = ({ trackId }) => {
  const { data: track } = useTrack({ trackId });
  const router = useRouter();
  const image = track?.album.images.length
    ? maxOfArray(track.album.images, "width")
    : undefined;

  if (!track) return null;

  return (
    <YStack style={styles.track}>
      {image && <TrackGradient src={image.url} />}
      <LinearGradient
        style={styles.gradient}
        colors={[THEME.color.bg, "transparent", "transparent"]}
        locations={[0, 0.2, 1]}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 0, y: 0.9 }}
      />
      <Image
        width={128}
        height={128}
        alt="logo"
        src={require("@/assets/images/spotify.svg")}
        style={styles.trackSpotifyLogo}
        objectFit="contain"
      />

      <XStack style={styles.trackContent}>
        {image ? (
          <Image
            width={image.width}
            height={image.height}
            alt="thumbnail"
            src={image.url}
            style={styles.trackThumb}
          />
        ) : (
          <View style={[styles.trackThumb, styles.trackItemPlaceholder]}>
            <Icon
              name="hugeicons:music-note-03"
              color={THEME.color["bg-40"]}
              size={160}
            />
          </View>
        )}
        <YStack gap={16} style={{ maxWidth: "60%" }}>
          <Text variant="heading2" numberOfLines={2}>
            {track.name}
          </Text>
          <Text
            variant="heading4"
            color={THEME.color["bg-90"]}
            numberOfLines={1}
            fontWeight={500}
          >
            {track.artists.map((a) => a.name).join(", ")}
          </Text>
          <Text variant="body1" color={THEME.color["bg-80"]} numberOfLines={1}>
            {track.album.name} · {dayjs(track.album.release_date).year()}
          </Text>
          <Button
            style={{ marginTop: 20 }}
            startIcon={
              <Image
                width={64}
                height={64}
                alt="spotify-logo"
                src={require("@/assets/images/spotify-white.svg")}
                style={{ height: 20, width: 20 }}
                objectFit="contain"
              />
            }
            onClick={() => router.push(track.external_urls.spotify)}
          >
            Open in Spotify
          </Button>
        </YStack>
      </XStack>
    </YStack>
  );
};

export default Track;
