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
  trackItemPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  track: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "static",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  trackContent: {
    gap: 36,
    borderRadius: 16,
    width: "80%",
    maxWidth: 1200,
    justifyContent: "center",
  },
  trackContentMobile: {
    gap: 28,
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: 28,
    left: 28,
  },
});

export default styles;
