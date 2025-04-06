import { StyleSheet } from "react-native";
import { THEME, ThemeManager } from "../../lib";
import { ButtonProps, IconButtonProps, TextButtonProps } from ".";

const themeMode = ThemeManager.getTheme();

export const bgColor = {
  primary: THEME.color[themeMode].primary.main,
  secondary: THEME.color[themeMode].fg,
};

export const fgColor = {
  primary: THEME.color[themeMode].fg,
  secondary: THEME.color[themeMode].bg,
};

const bgHover = {
  primary: THEME.color[themeMode].primary.darker,
  secondary: THEME.color[themeMode]["bg-60"],
};

export const button = (props: ButtonProps) =>
  StyleSheet.create({
    button: {
      height: THEME.spacing[props?.size] * 14,
      paddingHorizontal: THEME.spacing[props?.size] * 8,
      backgroundColor:
        props.variant === "solid" ? bgColor[props.color] : undefined,
      borderColor: bgColor[props.color],
      borderWidth: props.variant === "outlined" ? 1 : 0,
      borderRadius: props.rounded
        ? THEME.spacing[props?.size] * 10
        : THEME.radius[props.size],
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    text: {
      color:
        props.variant === "solid" ? fgColor[props.color] : bgColor[props.color],
      fontSize: THEME.fontSize[props.size],
      fontWeight: "500",
    },
    hovered: {
      backgroundColor: bgHover[props.color],
    },
  });

export const textButton = (props: TextButtonProps) =>
  StyleSheet.create({
    button: {
      padding: THEME.spacing[props?.size] * 1,
      borderColor: bgColor[props.color],
      borderBottomWidth: props.underline ? 1.5 : 0,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    text: {
      color: bgColor[props.color],
      fontSize: THEME.fontSize[props.size],
      fontWeight: "500",
    },
    hovered: {},
  });

export const iconButton = (props: IconButtonProps) =>
  StyleSheet.create({
    button: {
      height: THEME.spacing[props?.size] * 14,
      width: THEME.spacing[props?.size] * 14,
      borderWidth: props.variant === "outlined" ? 1.5 : 0,
      borderColor: bgColor[props.color],
      backgroundColor:
        props.variant === "solid" ? bgColor[props.color] : undefined,
      borderRadius: THEME.spacing[props?.size] * 10,
      alignItems: "center",
      justifyContent: "center",
    },
    hovered: {
      backgroundColor: bgHover[props.color],
    },
  });
