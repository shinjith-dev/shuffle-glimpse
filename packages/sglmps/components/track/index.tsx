"use client";
import { Button, Icon, IconButton, TextButton, XStack, YStack } from "@/ui";
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
import { useEffect } from "react";
import { useWidth } from "@/hooks";

interface Props {
  trackId?: any;
}

const Track: React.FC<Props> = ({ trackId }) => {
  const { data: track, error } = useTrack({ trackId });
  const router = useRouter();
  const { isMobile } = useWidth();
  const image = track?.album.images.length
    ? maxOfArray(track.album.images, "width")
    : undefined;

  useEffect(
    () => console.log(error?.message),
    // router.push('/404')
    [error],
  );

  if (!track) return null;

  return (
    <YStack
      style={[
        styles.track,
        {
          paddingHorizontal: isMobile ? 12 : 20,
          paddingVertical: 60,
        },
      ]}
    >
      {image && <TrackGradient src={image.url} />}
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
          top: isMobile ? 16 : 28,
          right: isMobile ? 12 : 20,
          position: "absolute",
          height: isMobile ? 36 : 44,
          width: isMobile ? 100 : 120,
        }}
        objectFit="contain"
      />

      <View
        style={{
          top: isMobile ? 16 : 28,
          left: isMobile ? 12 : 20,
          position: "absolute",
        }}
      >
        <IconButton
          variant="ghost"
          color="primary"
          size={isMobile ? "xl" : "3xl"}
          onClick={router.back}
          icon="hugeicons:circle-arrow-left-02"
        />
      </View>

      <YStack style={styles.trackContent}>
        {image ? (
          <Image
            width={image.width}
            height={image.height}
            alt="thumbnail"
            src={image.url}
            style={{
              width: isMobile ? 240 : 320,
              height: isMobile ? 240 : 320,
              borderRadius: 8,
              backgroundColor: THEME.color["bg-20"],
            }}
          />
        ) : (
          <View
            style={[
              {
                width: isMobile ? 240 : 320,
                height: isMobile ? 240 : 320,
                borderRadius: 8,
                backgroundColor: THEME.color["bg-20"],
              },
              styles.trackItemPlaceholder,
            ]}
          >
            <Icon
              name="hugeicons:music-note-03"
              color={THEME.color["bg-40"]}
              size={160}
            />
          </View>
        )}

        <YStack
          alignItems="center"
          gap={isMobile ? 8 : 12}
          style={{ maxWidth: "100%" }}
        >
          <Text
            variant={isMobile ? "heading3" : "heading1"}
            style={{ textAlign: "center" }}
            numberOfLines={2}
          >
            {track.name}
          </Text>
          <XStack>
            {track.artists.map((a, index) => (
              <TextButton
                color="primary"
                size="xl"
                key={a.id}
                onClick={() => router.push(`/artist/${a.id}`)}
              >
                {`${a.name}${index !== track.artists.length - 1 ? ", " : ""}`}
              </TextButton>
            ))}
          </XStack>
          <Text
            variant={isMobile ? "body3" : "body1"}
            color={THEME.color["bg-80"]}
            style={{ textAlign: "center" }}
            numberOfLines={1}
          >
            {track.album.name} · {dayjs(track.album.release_date).year()}
          </Text>
          <Button
            size={isMobile ? "md" : "lg"}
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
            Listen on Spotify
          </Button>
        </YStack>
      </YStack>
    </YStack>
  );
};

export default Track;
