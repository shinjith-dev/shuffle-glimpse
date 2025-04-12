import { StyleSheet } from "react-native";
import { THEME } from "../../lib/config";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    width: "100%",
  },
  icons: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  startIcon: {
    left: 12,
  },
  endIcon: {
    right: 12,
  },
  input: {
    flexGrow: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: THEME.COLOR_PRIMARY_LIGHTER,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: THEME.COLOR_BG,
    fontSize: 16,
    position: "relative",
    color: THEME.COLOR_PRIMARY_DARKER,
    width: "100%",
  },
  showCaret: {
    position: "absolute",
    right: 8,
    top: 6,
  },
});

export default styles;
