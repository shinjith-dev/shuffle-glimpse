import { THEME } from "@/lib";
import useWindowDimensions from "../useWindowDimensions";

export function useWidth() {
  const { width } = useWindowDimensions();
  return {
    isMobile: width <= THEME.breakPoints.mobile,
    isTab: width > THEME.breakPoints.mobile && width <= THEME.breakPoints.tab,
    isDesktop: width > THEME.breakPoints.desktop,
  };
}
