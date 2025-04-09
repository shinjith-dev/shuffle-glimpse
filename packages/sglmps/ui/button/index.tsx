import React from "react";
import { Pressable, PressableProps, Text, TextProps } from "react-native";
import { THEME, TSpacing } from "../../lib";
import { bgColor,  iconButton, textButton } from "./style";
import { Icon, IconProps } from "../icon";
import { cva ,type VariantProps} from "cva";
import {ButtonHTMLAttributes} from 'react'
import { twMerge } from "tailwind-merge";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(["flex", "items-center", "transition-all", "justify-center", "cursor-pointer"], {
  variants: {
    color: {
primary: ["hover:scale-105", "border-brand"],
secondary: ["border-bg-30", "hover:bg-bg-40"]
    },
    variant:{
      solid:["text-fg"],
      outlined:["border"]
    },
  },
  compoundVariants: [
    {
      variant:'solid',
      color: 'primary',
class:'bg-brand'
    },
     {
      variant:'solid',
      color: 'secondary',
class:'text-bg-30 bg-30'
    },
     {
      variant:'outlined',
      color: 'primary',
class:'bg-brand'
    },
     {
      variant:'outlined',
      color: 'secondary',
class:'text-bg-30'
    }
  ]
});

export type ButtonProps =  |
  ButtonHTMLAttributes<HTMLButtonElement>
& ButtonVariantProps & {
  size: TSpacing;
  children: string;
  rounded: boolean;
}

const buttonDefaultProps: ButtonProps = {
  size: "md",
  children: "Button",
  variant: "solid",
  rounded: false,
  color: "primary",
};

export const Button: React.FC<Partial<ButtonProps>> = ({
size="md",
  variant='solid',
  color='primary',
  rounded=true,
  children,
...props
}) => {

  return (
    <button
      className={twMerge(buttonVariants({variant,color}))}
      style={{
        height: THEME.spacing[size] * 14,
        padding: `0 ${THEME.spacing[size] * 8}px`,
        borderRadius: rounded
          ? THEME.spacing[size] * 10
          : THEME.radius[size],
        fontSize: THEME.fontSize[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TextButtonProps extends PressableProps {
  size: TSpacing;
  children: string;
  textProps?: TextProps;
  color: "primary" | "secondary";
  underline: boolean;
}

const textButtonDefaultProps: TextButtonProps = {
  size: "md",
  children: "Button",
  color: "primary",
  underline: false,
};

export const TextButton: React.FC<Partial<TextButtonProps>> = (props) => {
  const options = { ...textButtonDefaultProps, ...props };

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        textButton(options).button,
        (pressed || hovered) && textButton(options).hovered,
      ]}
    >
      <Text {...options.textProps} style={[textButton(options).text]}>
        {options.children}
      </Text>
    </Pressable>
  );
};

export interface IconButtonProps extends PressableProps {
  size: TSpacing;
  children: string;
  iconProps?: IconProps;
  variant: "solid" | "outlined" | "ghost";
  color: "primary" | "secondary";
  icon: string;
}

const iconButtonDefaultProps: IconButtonProps = {
  size: "md",
  children: "Button",
  variant: "solid",
  color: "primary",
  icon: "hugeicons:smile-dizzy",
};

export const IconButton: React.FC<Partial<IconButtonProps>> = (props) => {
  const options = { ...iconButtonDefaultProps, ...props };

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        iconButton(options).button,
        (pressed || hovered) && iconButton(options).hovered,
      ]}
    >
      <Icon
        strokeWidth={1.5}
        size={THEME.iconSize[options.size]}
        name={options.icon}
        color={
          options.variant === "solid" ? THEME.color.fg : bgColor[options.color]
        }
      />
    </Pressable>
  );
};
