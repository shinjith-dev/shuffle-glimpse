import { memo } from "react";
import styles from "./style";
import { Avatar } from "@/ui/avatar";
import { Pressable, View } from "react-native";
import useRouter from "@/hooks/useRouter";
import { useWidth } from "@/hooks";
import { TextButton } from "@/ui";
import Image from "@/ui/image";

interface Props {
  artist: ArtistItem;
}

const ArtistItem: React.FC<Props> = memo(({ artist }) => {
  const router = useRouter();
  const { isMobile } = useWidth();

  const image =
    artist.images.length > 0
      ? artist.images.reduce<ImageResponse>(
          (prev, img) =>
            img.width > 200 && img.width < (prev?.width || 0) ? img : prev,
          artist.images[0],
        )
      : undefined;

  return (
    <View style={[styles.artistItem, isMobile && { maxWidth: 136 }]}>
      <button
        className="mb-2 cursor-pointer"
        onClick={() => router.push(artist.external_urls.spotify)}
        title="Open in Spotify"
      >
        <Image
          width={64}
          height={64}
          alt="spotify-logo"
          src={require("@/assets/images/text-spotify-white.svg")}
          style={{ height: 22, width: 72 }}
          objectFit="contain"
        />
      </button>

      <Pressable onPress={() => router.push(`/artist/${artist.id}`)}>
        {image && (
          <Avatar
            size={isMobile ? "5xl" : "8xl"}
            src={image.url}
            avatarProps={{
              style: styles.artistItemAvatar,
            }}
          />
        )}
      </Pressable>
      <TextButton color="primary" style={{ textAlign: "center" }}>
        {artist.name}
      </TextButton>
    </View>
  );
});

export default ArtistItem;
