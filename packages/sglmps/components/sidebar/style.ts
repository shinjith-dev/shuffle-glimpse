import { StyleSheet } from "react-native";
import { opacity, THEME } from "../../lib";

const styles = StyleSheet.create({
  sidebar: {
    height: "100%",
    width: 300,
    borderRadius: 8,
    gap: 28,
    padding: 24,
    zIndex: 10,
    overflow: "hidden",
    backgroundColor: THEME.color["bg-10"],
  },
  bottomBar: {
    width: "100%",
    height: 68,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    borderRadius: 0,
  },
  collapsed: {
    width: "auto",
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: opacity(THEME.color.fg, 0.05),
    marginVertical: 12,
    borderRadius: 4,
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default styles;
