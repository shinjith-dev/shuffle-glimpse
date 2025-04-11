import React from "react";
import { Pressable, PressableProps, Text, TextProps } from "react-native";
import { THEME, TSpacing } from "../../lib";
import { bgColor, iconButton, textButton } from "./style";
import { Icon, IconProps } from "../icon";
import { cva, type VariantProps } from "cva";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

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
        brand: ["bg-brand", "hover:scale-103", "text-white"],
        primary: ["bg-white", "hover:scale-103", "text-bg"],
        secondary: ["bg-bg-30", "hover:bg-bg-40", "text-white"],
        tertiary: ["bg-bg-20", "hover:bg-bg-30", "text-white"],
      },
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    size: TSpacing;
    children: string;
    rounded: boolean;
  };

export const Button: React.FC<Partial<ButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(buttonVariants({ color }))}
      style={{
        height: THEME.spacing[size] * 14,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: rounded ? THEME.spacing[size] * 10 : THEME.radius[size],
        fontSize: THEME.fontSize[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export type OutlinedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: TSpacing;
  children: string;
  rounded: boolean;
};

export const OutlinedButton: React.FC<Partial<OutlinedButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  children,
  ...props
}) => {
  return (
    <button
      className="border-bg-70 cursor-pointer border text-white transition-all hover:scale-103 hover:border-white"
      style={{
        height: THEME.spacing[size] * 14,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: rounded ? THEME.spacing[size] * 10 : THEME.radius[size],
        fontSize: THEME.fontSize[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export type TextButtonVariantProps = VariantProps<typeof textButtonVariants>;
export const textButtonVariants = cva(
  [
    "flex",
    "items-center",
    "transition-all",
    "justify-center",
    "cursor-pointer",
    "text-white",
    "font-medium",
  ],
  {
    variants: {
      color: {
        primary: ["text-brand", "hover:scale-103"],
        secondary: ["text-bg-80", "hover:text-white"],
      },
    },
  },
);

export type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TextButtonVariantProps & {
    size: TSpacing;
    children: string;
  };

export const TextButton: React.FC<Partial<TextButtonProps>> = ({
  size = "md",
  color = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(textButtonVariants({ color }))}
      style={{
        padding: `4px 8px`,
        borderRadius: THEME.radius[size],
        fontSize: THEME.fontSize[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;
export const iconButtonVariants = cva(
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
        brand: ["bg-brand", "hover:scale-103", "text-white"],
        primary: ["bg-white", "hover:scale-103", "text-bg"],
        secondary: ["bg-bg-30", "hover:bg-bg-40", "text-white"],
        tertiary: ["bg-bg-20", "hover:bg-bg-30", "text-white"],
      },
      variant: {
        solid: [],
        ghost: [],
      },
    },
  },
);

const iconButtonDefaultProps: IconButtonProps = {
  size: "md",
  children: "Button",
  variant: "solid",
  color: "primary",
  icon: "hugeicons:smile-dizzy",
};

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariantProps & {
    size: TSpacing;
    children: string;
    rounded: boolean;
  };

export const IconButton: React.FC<Partial<IconButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  variant = "solid",
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(buttonVariants({ color }))}
      style={{
        height: THEME.spacing[props?.size] * 14,
        width: THEME.spacing[props?.size] * 14,
        backgroundColor:
          props.variant === "solid" ? bgColor[props.color] : undefined,
        borderRadius: THEME.spacing[props?.size] * 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
