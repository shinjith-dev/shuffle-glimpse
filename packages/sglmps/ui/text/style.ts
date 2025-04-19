import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading1: {
    fontSize: THEME.fontSize["4xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  body1: {
    fontSize: THEME.fontSize.md,
    color: THEME.color.fg,
  },
  body2: {
    fontSize: THEME.fontSize.sm,
    color: THEME.color["bg-80"],
  },
});

export default styles;
