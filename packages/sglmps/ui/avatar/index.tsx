import { View, type ViewStyle } from "react-native";
import { THEME } from "../../lib/config";
import styles, { AvatarSizes } from "./style";
import Image, { ImageProps } from "../image";
import Text from "../text";
import { forwardRef, Ref } from "react";

export interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: keyof typeof AvatarSizes;
  border?: boolean;
  borderColor?: string;
  style?: ViewStyle;
  avatarProps?: Omit<ImageProps, "src" | "alt">;
}

export const Avatar = forwardRef(
  (
    {
      src,
      alt = "Avatar",
      size = "md",
      border = false,
      borderColor = THEME.color.brand,
      avatarProps,
      style,
    }: IAvatarProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    return (
      <View
        style={[
          styles.container,
          {
            borderColor,
            height: AvatarSizes[size],
            width: AvatarSizes[size],
          },
          border && styles.bordered,
          style,
        ]}
      >
        {src ? (
          <Image
            ref={ref}
            height={AvatarSizes[size]}
            width={AvatarSizes[size]}
            src={src}
            alt={alt}
            objectFit="cover"
            {...avatarProps}
          />
        ) : (
          <Text fontSize={AvatarSizes[size] - 8}>{alt}</Text>
        )}
      </View>
    );
  },
);
