import React, { ReactElement } from "react";
import {
  type StyleProp,
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
} from "react-native";
import { THEME } from "../../lib/config";
import { opacity } from "../../lib/utils";
import styles from "./styles";

export interface InputProps extends TextInputProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input = ({
  style,
  startIcon,
  endIcon,
  containerStyle,
  ...props
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...props}
        style={[
          styles.input,
          !!startIcon && { paddingLeft: 44 },
          !!endIcon && { paddingRight: 44 },
          style,
        ]}
        placeholderTextColor={opacity(THEME.COLOR_PRIMARY_DARKER, 0.45)}
      />
      <View style={[styles.icons, styles.startIcon]}>{startIcon}</View>
      <View style={[styles.icons, styles.endIcon]}>{endIcon}</View>
    </View>
  );
};
