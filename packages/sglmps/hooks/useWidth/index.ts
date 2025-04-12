import useWindowDimensions from "../useWindowDimensions";
import { getScreenSize } from "../../utils/styles";

export type TDevices =
  | "mobile"
  | "tablet"
  | "laptop"
  | "desktop"
  | "monitor"
  | "unknown";

const useWidth = (): {
  device: TDevices;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isMonitor: boolean;
  width: number;
  loaded: boolean;
} => {
  const dimensions = useWindowDimensions();
  const width = dimensions?.width ?? 1920;

  const sizeBooleans = {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isLaptop: width >= 1024 && width < 1280,
    isDesktop: width >= 1280 && width < 1800,
    isMonitor: width >= 1800,
  };

  return {
    ...sizeBooleans,
    device: getScreenSize(
      sizeBooleans.isMobile,
      sizeBooleans.isTablet,
      sizeBooleans.isLaptop,
      sizeBooleans.isDesktop,
      sizeBooleans.isMonitor,
    ),
    width,
    loaded: true,
  };
};

export default useWidth;
