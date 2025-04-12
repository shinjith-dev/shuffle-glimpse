import { useEffect, useState } from "react";
import Dimensions from "../../lib/react-native-web/Dimensions/index.next";

const getServerDimensions = () => ({
  width: 1920,
  height: 1080,
});

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(() => {
    // Use default values for SSR
    if (typeof window === "undefined") return getServerDimensions();
    return Dimensions.get("window");
  });

  useEffect(() => {
    const updateSize = () => setDimensions(Dimensions.get("window"));

    updateSize();
    Dimensions.addEventListener("change", updateSize);

    return () => Dimensions.removeEventListener("change", updateSize);
  }, []);

  return dimensions;
};

export default useWindowDimensions;
