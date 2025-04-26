import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { opacity, THEME } from "@/lib";

const AppGradient = () => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[opacity(THEME.color["bg-10"], 0.4), THEME.color["bg-10"]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    />
  );
};

export default AppGradient;
