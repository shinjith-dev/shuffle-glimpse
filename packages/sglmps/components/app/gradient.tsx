import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { opacity, THEME } from "@/lib";
import { useWidth } from "@/hooks";

const AppGradient = () => {
  const { isMobile } = useWidth();
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        opacity(isMobile ? THEME.color["bg-10"] : THEME.color.bg, 0.4),
        isMobile ? THEME.color.bg : THEME.color["bg-10"],
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    />
  );
};

export default AppGradient;
