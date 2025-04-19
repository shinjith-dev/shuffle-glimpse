import { XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Text from "@/ui/text";
import { memo } from "react";

interface Props {
  track: TrackItem;
}

const TopTracksTrack: React.FC<Props> = ({ track }) => {
  const image =
    track.album.images.length > 0
      ? track.album.images.reduce<ImageResponse>(
          (prev, img) =>
            img.width > 40 && img.width < (prev?.width || 0) ? img : prev,
          track.album.images[0],
        )
      : undefined;

  return (
    <XStack alignItems="center" gap={12} style={{ flex: 0, maxWidth: "100%" }}>
      {image && (
        <Image
          width={image.width}
          height={image.height}
          alt="thumbnail"
          src={image.url}
          style={{ width: 40, height: 40, borderRadius: 4 }}
        />
      )}
      <YStack style={{ maxWidth: "100%" }}>
        <Text variant="body1" numberOfLines={1} style={{ maxWidth: "100%" }}>
          {track.name}
        </Text>
        <Text variant="body2" numberOfLines={1}>
          {track.artists.map((a) => a.name).join(", ")}
        </Text>
      </YStack>
    </XStack>
  );
};

export default memo(TopTracksTrack);
