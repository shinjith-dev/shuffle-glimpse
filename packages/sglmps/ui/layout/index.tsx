import React from "react";
import {
  type FlexAlignType,
  type FlexStyle,
  View,
  type ViewProps,
} from "react-native";
import styles from "./styles";

export interface LayoutProps extends ViewProps {
  jc?: FlexStyle["justifyContent"];
  ai?: FlexAlignType;
  gap?: number;
}

export const XStack = ({ jc, ai, gap, style, ...props }: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.xstack,
        {
          justifyContent: jc,
          alignItems: ai,
          gap,
        },
        style,
      ]}
    />
  );
};

export const YStack = ({ jc, ai, gap, style, ...props }: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.ystack,
        {
          justifyContent: jc,
          alignItems: ai,
          gap,
        },
        style,
      ]}
    />
  );
};
