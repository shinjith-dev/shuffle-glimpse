import React, { ReactElement } from "react";
import { IconSize, THEME, TSpacing } from "../../lib";
import { Icon, IconProps } from "../icon";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  ButtonVariantProps,
  IconButtonVariantProps,
  OutlinedButtonVariantProps,
  TextButtonVariantProps,
  buttonVariants,
  iconButtonVariants,
  outlinedButtonVariants,
  textButtonVariants,
} from "./style";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    size: TSpacing;
    children: string;
    rounded: boolean;
    startIcon?: ReactElement;
  };

export const Button: React.FC<Partial<ButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  startIcon,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({ color }), props?.className)}
      style={{
        height: `${THEME.spacing[size] * 14}px`,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: `${rounded ? THEME.spacing[size] * 10 : THEME.radius[size]}px`,
        fontSize: `${THEME.fontSize[size]}px`,
        ...props?.style,
      }}
    >
      {startIcon}
      {children}
    </button>
  );
};

export type OutlinedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  OutlinedButtonVariantProps & {
    size: TSpacing;
    children: string;
    rounded: boolean;
    startIcon?: ReactElement;
  };

export const OutlinedButton: React.FC<Partial<OutlinedButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  startIcon,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(outlinedButtonVariants({ color }), props?.className)}
      style={{
        height: `${THEME.spacing[size] * 14}px`,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: `${rounded ? THEME.spacing[size] * 10 : THEME.radius[size]}px`,
        fontSize: `${THEME.fontSize[size]}px`,
        ...props?.style,
      }}
    >
      {startIcon}
      {children}
    </button>
  );
};

export type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TextButtonVariantProps & {
    size: TSpacing;
    children: string;
  };

export const TextButton: React.FC<Partial<TextButtonProps>> = ({
  size = "md",
  color = "brand",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(textButtonVariants({ color }))}
      style={{
        padding: `4px 6px`,
        borderRadius: THEME.radius[size],
        fontSize: THEME.fontSize[size],
        ...props.style,
      }}
    >
      {children}
    </button>
  );
};

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  IconButtonVariantProps & {
    size: IconSize;
    children: string;
    rounded: boolean;
    icon: string;
  };

export const IconButton: React.FC<Partial<IconButtonProps>> = ({
  size = "md",
  color = "brand",
  rounded = true,
  variant = "solid",
  icon = "hugeicons:smile-dizzy",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        iconButtonVariants({ color, variant }),
        props?.className,
      )}
      style={{
        height: THEME.iconSize[size] + (variant === "solid" ? 8 : 0),
        width: THEME.iconSize[size] + (variant === "solid" ? 8 : 0),
        borderRadius: THEME.iconSize[size] + 8,
        ...props?.style,
      }}
    >
      <Icon name={icon} size={THEME.iconSize[size]} />
    </button>
  );
};
