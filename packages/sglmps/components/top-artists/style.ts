import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  glimpse: {
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    gap: 20,
  },
  glimpseHeader: {
    justifyContent: "space-between",
    width: "100%",
  },
  glimpseArtists: {
    gap: 28,
    paddingVertical: 12,
    flexWrap: "wrap",
    maxWidth: "100%",
  },
  artist: {
    gap: 12,
    alignItems: "center",
  },
  artistAvatar: {},
});

export default styles;
