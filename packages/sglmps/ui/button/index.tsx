import React, { ReactElement } from "react";
import { THEME, TSpacing } from "../../lib";
import { Icon, IconProps } from "../icon";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  ButtonVariantProps,
  IconButtonVariantProps,
  TextButtonVariantProps,
  buttonVariants,
  iconButtonVariants,
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
      className={twMerge(buttonVariants({ color }))}
      style={{
        height: THEME.spacing[size] * 14,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: rounded ? THEME.spacing[size] * 10 : THEME.radius[size],
        fontSize: THEME.fontSize[size],
      }}
      {...props}
    >
      {startIcon}
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
      className="border-bg-70 cursor-pointer border text-white transition-all hover:scale-103 hover:border-white disabled:hover:scale-100"
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

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  IconButtonVariantProps & {
    size: TSpacing;
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
      className={twMerge(iconButtonVariants({ color, variant }))}
      style={{
        height: THEME.spacing[size] * 14,
        width: THEME.spacing[size] * 14,
        borderRadius: THEME.spacing[size] * 10,
      }}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
};
