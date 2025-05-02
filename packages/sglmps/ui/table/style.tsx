import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: THEME.color["bg-10"],
    padding: 8,
    borderBottomWidth: 1,
    borderColor: THEME.color["bg-30"],
    width: "100%",
    marginBottom: 12,
  },
  headerContent: {
    minWidth: 36,
    textAlign: "left",
    overflow: "hidden",
    paddingRight: 28,
    flexShrink: 0,
  },
  table: {
    width: "100%",
    maxHeight: "100%",
    height: "100%",
    flexGrow: 1,
  },
  tableContents: {
    width: "100%",
  },
  item: {
    padding: 12,
  },
  itemHovered: {
    padding: 12,
    backgroundColor: THEME.color["bg-20"],
  },
  itemContent: {
    textAlign: "left",
    overflow: "hidden",
    minWidth: 36,
    paddingRight: 28,
    flexShrink: 0,
  },
});

export default styles;
