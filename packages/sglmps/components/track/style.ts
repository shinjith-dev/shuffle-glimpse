import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  trackItem: {
    alignItems: "center",
    flex: 1,
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
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  trackContent: {
    gap: 12,
    borderRadius: 16,
    width: "100%",
    maxWidth: 1200,
    alignItems: "center",
    position: "relative",
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
