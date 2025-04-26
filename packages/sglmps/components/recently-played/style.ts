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
  header: {
    justifyContent: "space-between",
    width: "100%",
  },
  contents: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default styles;
