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
  topHeaderMobile: {
    padding: 16,
    gap: 8,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: THEME.color["bg-10"],
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
