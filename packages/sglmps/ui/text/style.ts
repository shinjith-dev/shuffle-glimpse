import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading1: {
    fontSize: THEME.fontSize["6xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  heading2: {
    fontSize: THEME.fontSize["4xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  heading3: {
    fontSize: THEME.fontSize["3xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  heading4: {
    fontSize: THEME.fontSize["2xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  heading5: {
    fontSize: THEME.fontSize["xl"],
    color: THEME.color.fg,
    fontWeight: 600,
  },
  body1: {
    fontSize: THEME.fontSize.md,
    color: THEME.color.fg,
  },
  body2: {
    fontSize: THEME.fontSize.sm,
    color: THEME.color.fg,
  },
  body3: {
    fontSize: THEME.fontSize.xs,
    color: THEME.color.fg,
  },
});

export default styles;
