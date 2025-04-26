import React from "react";
import {
  ColorValue,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";
import styles from "./style";

export interface TextProps extends RNTextProps {
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body1"
    | "body2";
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight?: number;
}

const Text: React.FC<TextProps> = ({
  fontSize,
  fontWeight,
  lineHeight,
  variant = "body1",
  color,
  ...props
}) => {
  return (
    <RNText
      {...props}
      style={[
        styles[variant],
        {
          fontSize,
          fontWeight,
          lineHeight,
          color,
        },
        props.style,
      ]}
    />
  );
};

export default Text;
