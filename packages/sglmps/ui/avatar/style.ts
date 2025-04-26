import { StyleSheet } from "react-native";
import { THEME } from "../../lib/config";

const styles = StyleSheet.create({
  bordered: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  container: {
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: THEME.color["bg-20"],
  },
});

export const AvatarSizes = {
  xs: 30,
  sm: 40,
  md: 50,
  lg: 60,
  xl: 70,
  "2xl": 80,
  "3xl": 90,
  "4xl": 100,
  "5xl": 120,
  "6xl": 140,
  "7xl": 160,
  "8xl": 180,
  "9xl": 200,
};

export default styles;
