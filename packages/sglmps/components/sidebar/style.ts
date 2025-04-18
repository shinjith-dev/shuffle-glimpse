import { StyleSheet } from "react-native";
import { THEME } from "../../lib";

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: THEME.color["bg-10"],
    height: "100%",
    width: 280,
    borderRadius: 8,
    paddingVertical: 20,
    gap: 28,
    paddingHorizontal: 12,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: THEME.color["bg-20"],
    marginVertical: 12,
    borderRadius: 4,
  },
});

export default styles;
