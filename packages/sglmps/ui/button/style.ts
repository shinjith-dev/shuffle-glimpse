import { cva, VariantProps } from "cva";
import { THEME } from "../../lib";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  [
    "flex",
    "items-center",
    "transition-all",
    "justify-center",
    "cursor-pointer",
    "font-medium",
  ],
  {
    variants: {
      color: {
        brand: ["bg-brand", "hover:scale-103", "text-fg"],
        primary: ["bg-white", "hover:scale-103", "text-bg"],
        secondary: ["bg-bg-30", "hover:bg-bg-40", "text-fg"],
        tertiary: ["bg-bg-20", "hover:bg-bg-30", "text-fg"],
      },
    },
  },
);

export type TextButtonVariantProps = VariantProps<typeof textButtonVariants>;
export const textButtonVariants = cva(
  [
    "flex",
    "items-center",
    "transition-all",
    "justify-center",
    "cursor-pointer",
    "text-fg",
    "font-medium",
  ],
  {
    variants: {
      color: {
        brand: ["text-brand", "hover:scale-103"],
        primary: ["text-bg-80", "hover:text-fg"],
      },
    },
  },
);

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;
export const iconButtonVariants = cva(
  [
    "flex",
    "items-center",
    "transition-all",
    "justify-center",
    "cursor-pointer",
  ],
  {
    variants: {
      color: {
        brand: ["hover:scale-103"],
        primary: ["hover:scale-103"],
        secondary: null,
        tertiary: null,
      },
      variant: {
        solid: null,
        ghost: ["hover:scale-103"],
      },
    },
    compoundVariants: [
      {
        color: "brand",
        variant: "solid",
        class: "bg-brand text-fg",
      },
      {
        color: "brand",
        variant: "ghost",
        class: "text-brand",
      },
      {
        color: "primary",
        variant: "solid",
        class: "bg-fg text-bg",
      },
      {
        color: "primary",
        variant: "ghost",
        class: "text-fg",
      },
      {
        color: "secondary",
        variant: "solid",
        class: "bg-bg-30 text-bg-80 hover:text-fg hover:bg-bg-40",
      },
      {
        color: "secondary",
        variant: "ghost",
        class: "text-bg-80 hover:text-fg",
      },
      {
        color: "tertiary",
        variant: "solid",
        class: "bg-bg-20 text-bg-70 hover:text-fg hover:bg-bg-30",
      },
      {
        color: "tertiary",
        variant: "ghost",
        class: "text-bg-70 hover:text-bg-90",
      },
    ],
  },
);
