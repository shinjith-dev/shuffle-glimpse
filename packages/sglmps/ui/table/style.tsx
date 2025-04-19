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
  table: {
    width: "100%",
  },
  tableContents: {
    width: "100%",
  },
});

export default styles;
