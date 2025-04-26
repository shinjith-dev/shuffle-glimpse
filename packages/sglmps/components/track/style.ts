import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  trackItem: {
    alignItems: "center",
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: "95%",
  },
  trackItemThumb: {
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: THEME.color["bg-20"],
  },
  trackItemPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
