"use client";
import { IconButton, OutlinedButton, YStack } from "@/ui";
import styles from "./style";
import { useArtist } from "@/queries";
import ArtistGradient from "./gradient";
import { maxOfArray, THEME } from "@/lib";
import Image from "@/ui/image";
import { ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import useRouter from "@/hooks/useRouter";
import { useWidth } from "@/hooks";
import ArtistsTopTracks from "../top-tracks/artists-top";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { Avatar } from "@/ui/avatar";
import Text from "@/ui/text";

interface Props {
  artistId?: any;
}

const Artist: React.FC<Props> = ({ artistId }) => {
  const { data: artist } = useArtist({ artistId });
  const router = useRouter();
  const { isMobile, contentWidth } = useWidth();
  const image = artist?.images.length
    ? maxOfArray(artist.images, "width")
    : undefined;

  return (
    <YStack style={styles.artistContainer}>
      {image && <ArtistGradient src={image.url} />}
      <ScrollView
        style={styles.artistContainer}
        contentContainerStyle={[
          styles.artist,
          {
            paddingHorizontal: isMobile ? 12 : 20,
            paddingVertical: 60,
          },
        ]}
      >
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

        <YStack style={styles.artistContent}>
          {image && (
            <Avatar
              size={isMobile ? "10xl" : "12xl"}
              src={image.url}
              avatarProps={{
                style: styles.artistItemAvatar,
              }}
            />
          )}

          {artist ? (
            <YStack
              alignItems="center"
              style={{ maxWidth: "100%", marginBottom: 40 }}
            >
              <Text
                style={{ textAlign: "center", marginBottom: 12 }}
                variant={isMobile ? "heading3" : "heading1"}
                numberOfLines={2}
              >
                {artist.name}
              </Text>
              <Text
                variant={isMobile ? "heading5" : "heading4"}
                color={THEME.color.brand}
                numberOfLines={1}
                fontWeight={500}
                style={{ marginBottom: 4 }}
              >
                {artist.followers?.total?.toLocaleString()}
              </Text>
              <Text
                variant={isMobile ? "body3" : "body2"}
                color={THEME.color["bg-90"]}
                numberOfLines={1}
                fontWeight={500}
              >
                FOLLOWERS
              </Text>

              <OutlinedButton
                style={{ marginTop: 20 }}
                size={isMobile ? "sm" : "md"}
                color="secondary"
                onClick={() => router.push(artist.external_urls.spotify)}
              >
                Show on Spotify
              </OutlinedButton>
            </YStack>
          ) : (
            <View>
              <ContentLoader
                speed={1}
                width={contentWidth}
                height={isMobile ? 390 : 599}
                viewBox={`0 0 ${contentWidth} ${isMobile ? 390 : 599}`}
                backgroundColor={THEME.color["bg-10"]}
                foregroundColor={THEME.color["bg-30"]}
              >
                <Circle
                  cx={contentWidth / 2}
                  cy={isMobile ? 120 : 160}
                  r={isMobile ? 120 : 160}
                />
                <Rect
                  x={contentWidth / 2 - 180}
                  y={isMobile ? 260 : 340}
                  rx={8}
                  ry={8}
                  width={360}
                  height={isMobile ? 40 : 60}
                />
                <Rect
                  x={contentWidth / 2 - 60}
                  y={isMobile ? 320 : 420}
                  rx={8}
                  ry={8}
                  width={120}
                  height={isMobile ? 40 : 32}
                />
                {!isMobile && (
                  <Rect
                    x={contentWidth / 2 - 83}
                    y={isMobile ? 156 : 490}
                    rx={20}
                    ry={20}
                    width={166}
                    height={42}
                  />
                )}
              </ContentLoader>
            </View>
          )}
          <ArtistsTopTracks artistId={artistId} />
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default Artist;
