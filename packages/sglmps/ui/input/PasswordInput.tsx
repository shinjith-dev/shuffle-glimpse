"use client";
import React, { type ReactElement, useState } from "react";
import {
  type StyleProp,
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
} from "react-native";
import { THEME } from "../../lib/config";
import { opacity } from "../../lib/utils";
import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles";

export interface PasswordInputProps extends TextInputProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}

export const PasswordInput = ({
  style,
  startIcon,
  endIcon,
  containerStyle,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(true);

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
        secureTextEntry={showPassword}
        caretHidden
        placeholderTextColor={opacity(THEME.COLOR_PRIMARY_DARKER, 0.45)}
      />
      <View style={[styles.icons, styles.startIcon]}>{startIcon}</View>
      <IconButton
        size="sm"
        containerStyle={styles.showCaret}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <Icon
          name={showPassword ? "hugeicons:view" : "hugeicons:view-off-slash"}
          size={20}
          color={THEME.COLOR_PRIMARY}
        />
      </IconButton>
      <View style={[styles.icons, styles.endIcon]}>{endIcon}</View>
    </View>
  );
};
