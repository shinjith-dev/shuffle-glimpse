import { opacity, THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  artistItem: {
    gap: 12,
    alignItems: "center",
    maxWidth: 196,
    padding: 8,
    borderRadius: 4,
  },
  artistItemHovered: {
    backgroundColor: opacity(THEME.color["bg-30"], 0.2),
  },
  artistItemAvatar: {},
  artist: {
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
  artistContent: {
    gap: 12,
    borderRadius: 16,
    width: "80%",
    maxWidth: 1200,
    alignItems: "center",
  },
  artistAvatar: {
    width: 360,
    height: 360,
    borderRadius: 8,
    backgroundColor: THEME.color["bg-20"],
  },
  artistSpotifyLogo: {
    height: 44,
    width: 44,
    position: "absolute",
    top: 28,
    right: 28,
  },
  artistItemPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
