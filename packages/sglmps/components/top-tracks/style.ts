import { THEME } from "@/lib";
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
  topContainer: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    backgroundColor: THEME.color["bg-10"],
    borderRadius: 8,
    padding: 28,
    gap: 28,
  },
  topContent: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  glimpse: {
    width: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    gap: 20,
  },
  glimpseTable: { flexGrow: 1, width: "100%", paddingBottom: 20 },
  glimpseHeader: {
    justifyContent: "space-between",
    width: "100%",
  },
});

export default styles;
