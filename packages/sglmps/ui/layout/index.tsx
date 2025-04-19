import {
  DimensionValue,
  type FlexAlignType,
  type FlexStyle,
  View,
  type ViewProps,
} from "react-native";
import styles from "./styles";

export interface LayoutProps extends ViewProps {
  justifyContent?: FlexStyle["justifyContent"];
  alignItems?: FlexAlignType;
  flexGrow?: number | undefined;
  flexShrink?: number | undefined;
  flexBasis?: DimensionValue | undefined;
  flex?: number;
  gap?: number;
}

export const XStack = ({
  justifyContent,
  alignItems,
  gap,
  flexGrow,
  flex,
  flexShrink,
  flexBasis,
  style,
  ...props
}: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.xstack,
        {
          justifyContent,
          alignItems,
          gap,
          flex,
          flexGrow,
          flexShrink,
          flexBasis,
        },
        style,
      ]}
    />
  );
};

export const YStack = ({
  justifyContent,
  alignItems,
  gap,
  flexGrow,
  flex,
  flexShrink,
  flexBasis,
  style,
  ...props
}: LayoutProps) => {
  return (
    <View
      {...props}
      style={[
        styles.ystack,
        {
          justifyContent,
          alignItems,
          gap,
          flex,
          flexGrow,
          flexShrink,
          flexBasis,
        },
        style,
      ]}
    />
  );
};
