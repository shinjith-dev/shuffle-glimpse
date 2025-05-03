import Text from "@/ui/text";
import { memo } from "react";
import styles from "./style";
import { Avatar } from "@/ui/avatar";
import { Pressable } from "react-native";
import useRouter from "@/hooks/useRouter";
import { useWidth } from "@/hooks";

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
    <Pressable
      onPress={() => router.push(`/artist/${artist.id}`)}
      style={({ pressed, hovered }) => [
        styles.artistItem,
        (pressed || hovered) && styles.artistItemHovered,
        isMobile && { maxWidth: 136 },
      ]}
    >
      {image && (
        <Avatar
          size={isMobile ? "5xl" : "8xl"}
          src={image.url}
          avatarProps={{
            style: styles.artistItemAvatar,
          }}
        />
      )}
      <Text style={{ textAlign: "center" }} variant="body1" numberOfLines={2}>
        {artist.name}
      </Text>
    </Pressable>
  );
});

export default ArtistItem;
