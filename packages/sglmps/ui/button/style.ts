import { StyleSheet } from "react-native";
import { THEME, ThemeManager } from "../../lib";
import { ButtonProps, IconButtonProps, TextButtonProps } from ".";

export const bgColor = {
  primary: THEME.color.brand,
  secondary: THEME.color["bg-30"],
};

const bgHover = {
  primary: THEME.color.brand,
  secondary: THEME.color["bg-40"],
};

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
