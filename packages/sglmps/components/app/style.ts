import { StyleSheet } from "react-native";
import { THEME } from "../../lib";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: THEME.color.bg,
    flexDirection: "row",
    padding: 20,
    gap: 20,
  },
});

export default styles;
