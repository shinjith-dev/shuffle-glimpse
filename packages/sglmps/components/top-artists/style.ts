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
  topContent: {
    height: "100%",
    width: "100%",
    flex: 1,
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
    gap: 28,
    paddingVertical: 12,
    flexWrap: "wrap",
    maxWidth: "100%",
    flexDirection: "row",
  },
  artist: {
    gap: 12,
    alignItems: "center",
    maxWidth: 180,
  },
  artistAvatar: {},
});

export default styles;
