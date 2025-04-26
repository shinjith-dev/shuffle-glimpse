import { opacity, THEME } from "@/lib";
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
  track: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  gradient: {
    width: "130%",
    height: "120%",
    position: "absolute",
    top: -20,
    right: -20,
    zIndex: -1,
  },
  trackContent: {
    gap: 36,
    borderRadius: 16,
    width: "80%",
    maxWidth: 1000,
  },
  trackThumb: {
    width: 280,
    height: 280,
    borderRadius: 8,
    backgroundColor: THEME.color["bg-20"],
  },
  trackSpotifyLogo: {
    height: 44,
    width: 44,
    position: "absolute",
    top: 28,
    right: 28,
  },
});

export default styles;
