import { StyleSheet } from "react-native";
import { THEME } from "../../lib";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: THEME.color.bg,
    flexDirection: "row",
    padding: 20,
    gap: 20,
    position: "relative",
  },
  layoutContent: {
    flexGrow: 1,
    flexShrink: 1,
    height: "100%",
    position: "static",
  },
  glimpseCont: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    backgroundColor: THEME.color["bg-10"],
    borderRadius: 8,
  },
  glimpse: {
    flexGrow: 1,
    width: "100%",
    flexDirection: "column",
    gap: 40,
    padding: 32,
    position: "relative",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;
