import { Image as ExpoImage } from "expo-image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  style?: any;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  style,
  objectFit = "cover",
}) => {
  return (
    <ExpoImage
      source={src}
      style={[{ width, height }, style]}
      accessibilityLabel={alt}
      contentFit={objectFit}
    />
  );
};

export default Image;
