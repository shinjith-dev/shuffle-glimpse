"use client";
import NextImage from "next/image";
import React, { forwardRef, Ref } from "react";

export interface ImageProps {
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

const Image = forwardRef(
  (
    {
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
    }: ImageProps,
    ref: Ref<HTMLImageElement>,
  ) => {
    const fill = objectFit === "cover" && !width && !style.width;
    return (
      <NextImage
        ref={ref}
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
  },
);

export default Image;
