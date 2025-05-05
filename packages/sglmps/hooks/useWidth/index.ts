import { THEME } from "@/lib";
import useWindowDimensions from "../useWindowDimensions";

export function useWidth() {
  const { width } = useWindowDimensions();
  const sidebarWidth =
    width <= THEME.breakPoints.mobile
      ? 0
      : width > THEME.breakPoints.mobile && width <= THEME.breakPoints.tab
        ? 64
        : 300;
  return {
    isMobile: width <= THEME.breakPoints.mobile,
    isTab: width > THEME.breakPoints.mobile && width <= THEME.breakPoints.tab,
    isDesktop: width > THEME.breakPoints.desktop,
    sidebarWidth,
    contentWidth:
      width - sidebarWidth - (width <= THEME.breakPoints.mobile ? 0 : 60),
  };
}
