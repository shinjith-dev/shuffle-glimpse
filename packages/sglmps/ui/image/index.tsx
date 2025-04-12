"use client";
import NextImage from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: any;
  priority?: boolean;
  quality?: number;
  objectFit?: "cover" | "contain" | "fill" | "none";
  draggable?: boolean;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  style,
  priority,
  quality,
  objectFit = "contain",
  draggable = true,
  className,
}) => {
  const fill = objectFit === "cover" && !width && !style.width;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      style={{
        ...style,
        objectFit,
      }}
      fill={fill}
      priority={priority}
      quality={quality}
      draggable={draggable}
      className={className}
    />
  );
};

export default Image;
