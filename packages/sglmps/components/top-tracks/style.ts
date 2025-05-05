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
  topContainerMobile: { gap: 0, padding: 0, backgroundColor: THEME.color.bg },
  topHeader: {
    rowGap: 12,
    columnGap: 36,
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  topHeaderMobile: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    padding: 16,
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
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
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
