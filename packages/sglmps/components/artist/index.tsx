"use client";
import { IconButton, OutlinedButton, YStack } from "@/ui";
import styles from "./style";
import { useArtist } from "@/queries";
import ArtistGradient from "./gradient";
import { maxOfArray, THEME } from "@/lib";
import Image from "@/ui/image";
import { View } from "react-native";
import Text from "@/ui/text";
import LinearGradient from "react-native-linear-gradient";
import useRouter from "@/hooks/useRouter";
import { Avatar } from "@/ui/avatar";
import { useWidth } from "@/hooks";

interface Props {
  artistId?: any;
}

const Artist: React.FC<Props> = ({ artistId }) => {
  const { data: artist } = useArtist({ artistId });
  const router = useRouter();
  const { isMobile } = useWidth();
  const image = artist?.images.length
    ? maxOfArray(artist.images, "width")
    : undefined;

  if (!artist) return null;

  return (
    <YStack style={styles.artist}>
      {image && <ArtistGradient src={image.url} />}
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
        style={{
          height: isMobile ? THEME.iconSize.xl : THEME.iconSize["3xl"],
          width: isMobile ? THEME.iconSize.xl : THEME.iconSize["3xl"],
          position: "absolute",
          top: 28,
          right: 28,
        }}
        objectFit="contain"
      />

      <View style={styles.back}>
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

        <YStack alignItems="center" style={{ maxWidth: "100%" }}>
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
          >
            {artist.followers.total}
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
      </YStack>
    </YStack>
  );
};

export default Artist;
