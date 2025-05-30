import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { opacity, THEME } from "@/lib";
import { useTheme } from "@/store";
import { useWidth } from "@/hooks";

export const SidebarGradient = () => {
  const { isMobile } = useWidth();
  const sidebarColor = useTheme((state) => state.sidebarColor);

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        isMobile
          ? opacity(THEME.color.bg, isMobile ? 0.7 : 1)
          : sidebarColor || THEME.color["bg-10"],
        isMobile ? opacity(THEME.color.bg, 0.95) : THEME.color["bg-10"],
        isMobile ? THEME.color.bg : THEME.color["bg-10"],
      ]}
      locations={[0, 0.7, 1]}
      start={isMobile ? { x: 0, y: 0 } : { x: 0.4, y: 0 }}
      end={isMobile ? { x: 0, y: 1 } : { x: 0.1, y: 1 }}
    />
  );
};
