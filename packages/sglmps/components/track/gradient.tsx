import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import { findDarkestInRange, THEME } from "@/lib";
import useColorThief from "use-color-thief";

const TrackGradient = ({ src }: { src: string }) => {
  const { palette } = useColorThief(src, {
    format: "hex",
    colorCount: 10,
  });

  const dominantColor = palette?.length
    ? findDarkestInRange(
        palette as string[],
        THEME.color.bg,
        THEME.color["bg-50"],
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
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 0 }}
    />
  );
};

export default TrackGradient;
