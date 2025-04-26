import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "static",
    paddingVertical: 30,
    paddingHorizontal: 32,
    width: "100%",
  },
  contentRow: {
    alignItems: "flex-end",
    gap: 20,
    width: "100%",
  },
  content: {
    paddingVertical: 12,
    flexGrow: 1,
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
