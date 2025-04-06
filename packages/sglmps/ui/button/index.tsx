import React from "react";
import { Pressable, PressableProps, Text, TextProps } from "react-native";
import { THEME, TSpacing } from "../../lib";
import { bgColor, button, fgColor, iconButton, textButton } from "./style";
import { Icon, IconProps } from "../icon";

export interface ButtonProps extends PressableProps {
  size: TSpacing;
  children: string;
  textProps?: TextProps;
  variant: "solid" | "outlined";
  rounded: boolean;
  color: "primary" | "secondary";
}

const buttonDefaultProps: ButtonProps = {
  size: "md",
  children: "Button",
  variant: "solid",
  rounded: false,
  color: "primary",
};

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const options = { ...buttonDefaultProps, ...props };

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        button(options).button,
        (pressed || hovered) && button(options).hovered,
      ]}
    >
      <Text
        {...options.textProps}
        style={[button(options).text, options.textProps?.style]}
      >
        {options.children}
      </Text>
    </Pressable>
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
          options.variant === "solid"
            ? fgColor[options.color]
            : bgColor[options.color]
        }
      />
    </Pressable>
  );
};
