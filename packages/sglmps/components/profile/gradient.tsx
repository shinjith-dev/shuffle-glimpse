import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { findDarkestInRange, THEME } from "@/lib";
import useColorThief from "use-color-thief";

const ProfileGradient = ({ src }: { src: string }) => {
  const { palette } = useColorThief(src, {
    format: "hex",
    colorCount: 10,
  });

  const dominantColor = palette?.length
    ? findDarkestInRange(
        palette as string[],
        THEME.color["bg-10"],
        THEME.color["bg-70"],
      )
    : undefined;
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[
        dominantColor ? (dominantColor as string) : THEME.color["bg-20"],
        THEME.color.bg,
      ]}
      // locations={[]}
      start={{ x: 0.3, y: 0 }}
      end={{ x: 0.7, y: 1 }}
    />
  );
};

export default ProfileGradient;
