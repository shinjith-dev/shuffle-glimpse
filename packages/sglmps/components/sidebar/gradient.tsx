import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { THEME } from "@/lib";
import { useTheme } from "@/store";

export const SidebarGradient = () => {
  const sidebarColor = useTheme((state) => state.sidebarColor);

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        sidebarColor || THEME.color["bg-10"],
        THEME.color["bg-10"],
        THEME.color["bg-10"],
      ]}
      locations={[0, 0.7, 1]}
      start={{ x: 0.4, y: 0 }}
      end={{ x: 0.1, y: 1 }}
    />
  );
};
