import React from "react";
import {
  DimensionValue,
  type FlexAlignType,
  type FlexStyle,
  View,
  type ViewProps,
} from "react-native";
import styles from "./styles";

export interface LayoutProps extends ViewProps {
  jc?: FlexStyle["justifyContent"];
  ai?: FlexAlignType;
  fg?: number | undefined;
  fs?: number | undefined;
  fb?: DimensionValue | undefined;
  f?: number;
  gap?: number;
}

export const XStack = ({
  jc,
  ai,
  gap,
  fg,
  f,
  fs,
  fb,
  style,
  ...props
}: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.xstack,
        {
          justifyContent: jc,
          alignItems: ai,
          gap,
          flex: f,
          flexGrow: fg,
          flexShrink: fs,
          flexBasis: fb,
        },
        style,
      ]}
    />
  );
};

export const YStack = ({
  jc,
  ai,
  gap,
  fg,
  f,
  fs,
  fb,
  style,
  ...props
}: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.ystack,
        {
          justifyContent: jc,
          alignItems: ai,
          gap,
          flex: f,
          flexGrow: fg,
          flexShrink: fs,
          flexBasis: fb,
        },
        style,
      ]}
    />
  );
};
