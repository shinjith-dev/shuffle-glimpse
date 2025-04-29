import { YStack } from "@/ui";
import Text from "@/ui/text";
import { memo } from "react";
import styles from "./style";
import { Avatar } from "@/ui/avatar";

interface Props {
  artist: ArtistItem;
}

const TopArtistsArtist: React.FC<Props> = memo(({ artist }) => {
  const image =
    artist.images.length > 0
      ? artist.images.reduce<ImageResponse>(
          (prev, img) =>
            img.width > 200 && img.width < (prev?.width || 0) ? img : prev,
          artist.images[0],
        )
      : undefined;

  return (
    <YStack style={styles.artistItem}>
      {image && (
        <Avatar
          size="8xl"
          src={image.url}
          avatarProps={{
            style: styles.artistItemAvatar,
          }}
        />
      )}
      <Text style={{ textAlign: "center" }} variant="body1" numberOfLines={2}>
        {artist.name}
      </Text>
    </YStack>
  );
});

export default TopArtistsArtist;
