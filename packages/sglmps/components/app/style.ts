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
  },
  layoutContent: {
    flexGrow: 1,
    flexShrink: 1,
    height: "100%",
  },
  glimpseCont: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    backgroundColor: THEME.color["bg-10"],
    borderRadius: 8,
  },
  glimpse: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    flexDirection: "column",
    gap: 40,
    paddingHorizontal: 28,
    paddingVertical: 28,
  },
});

export default styles;
