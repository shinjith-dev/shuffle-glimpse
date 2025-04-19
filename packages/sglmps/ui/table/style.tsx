import { THEME } from "@/lib";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: THEME.color["bg-30"],
    width: "100%",
    marginBottom: 12,
  },
  headerContent: {
    minWidth: 24,
    textAlign: "left",
    overflow: "hidden",
    paddingRight: 20,
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
    padding: 8,
  },
  itemContent: {
    textAlign: "left",
    overflow: "hidden",
    minWidth: 24,
    paddingRight: 20,
  },
});

export default styles;
