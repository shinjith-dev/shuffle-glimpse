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
  topContainerMobile: {
    padding: 0,
    gap: 12,
    backgroundColor: THEME.color.bg,
  },
  topContent: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  header: {
    rowGap: 12,
    columnGap: 36,
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  headerMobile: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    padding: 16,
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
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  glimpseArtists: {
    gap: 12,
    paddingVertical: 12,
    maxWidth: "100%",
    flexDirection: "row",
  },
  topArtists: {
    gap: 12,
    maxWidth: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default styles;
