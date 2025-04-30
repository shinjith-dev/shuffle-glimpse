class Dimensions {
  static get(_dim: "window" | "screen") {
    if (typeof window === "undefined") {
      // Default fallback for SSR (Next.js server-side)
      return { width: 0, height: 0 };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  static addEventListener(_type: "change", handler: () => void) {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handler);
    }
  }

  static removeEventListener(_type: "change", handler: () => void) {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", handler);
    }
  }
}

export default Dimensions;
