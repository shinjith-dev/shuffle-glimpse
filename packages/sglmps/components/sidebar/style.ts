import { StyleSheet } from "react-native";
import { THEME } from "../../lib";

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: THEME.color["bg-10"],
    height: "100%",
    width: 300,
    borderRadius: 8,
    gap: 28,
    padding: 24,
    zIndex: 10,
    overflow: "hidden",
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: THEME.color["bg-20"],
    marginVertical: 12,
    borderRadius: 4,
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
