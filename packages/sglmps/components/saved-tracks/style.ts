import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  saved: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    backgroundColor: THEME.color["bg-10"],
    borderRadius: 8,
    padding: 28,
    gap: 28,
  },
  savedMobile: { gap: 0, padding: 0, backgroundColor: THEME.color.bg },
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
  contents: {
    height: "100%",
    width: "100%",
    flex: 1,
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
