import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  topContainerMobile: { padding: 0, gap: 12, backgroundColor: THEME.color.bg },
  topContent: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  headerMobile: {
    flexDirection: "column",
    gap: 8,
    padding: 16,
    backgroundColor: THEME.color["bg-10"],
  },
  glimpse: {
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    gap: 20,
    marginBottom: 12,
  },
  glimpseHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  glimpseArtists: {
    gap: 12,
    paddingVertical: 12,
    maxWidth: "100%",
    overflow: "scroll",
    flexDirection: "row",
  },
  topArtists: {
    gap: 12,
    paddingVertical: 12,
    maxWidth: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default styles;
