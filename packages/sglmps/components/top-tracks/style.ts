import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  track: {
    alignItems: "center",
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: "95%",
  },
  trackThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  glimpse: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    gap: 20,
  },
  glimpseTable: { flexGrow: 1, width: "100%" },
  glimpseHeader: {
    justifyContent: "space-between",
    width: "100%",
  },
});

export default styles;
