import React from "react";
import { View, type ViewStyle } from "react-native";
import { THEME } from "../../lib/config";
import Image from "../Image";
import { Text } from "../Text";
import styles, { AvatarSizes } from "./styles";

export interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: keyof typeof AvatarSizes;
  border?: boolean;
  borderColor?: string;
  style?: ViewStyle;
}

export function Avatar({
  src,
  alt = "Avatar",
  size = "md",
  border = false,
  borderColor = THEME.COLOR_PRIMARY,
  style,
}: IAvatarProps) {
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
          src={src}
          alt={alt}
          height={AvatarSizes[size]}
          width={AvatarSizes[size]}
          objectFit="cover"
        />
      ) : (
        <Text size={AvatarSizes[size] - 8}>{alt}</Text>
      )}
    </View>
  );
}
