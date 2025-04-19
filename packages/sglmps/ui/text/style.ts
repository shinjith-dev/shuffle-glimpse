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
  },
});

export default styles;
