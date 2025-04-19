import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  track: {
    alignItems: "center",
    gap: 12,
    flex: 1,
    maxWidth: "100%",
  },
  trackThumbnail: {
    width: 40,
    height: 40,
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
