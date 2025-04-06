import theme from "../../theme.json";

export const THEME = {
  spacing: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3.5,
    xl: 4,
  },
  radius: {
    "2xs": 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    "2xl": 28,
  },
  fontSize: {
    xs: 11,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    "2xl": 20,
    "3xl": 24,
    "4xl": 30,
    "5xl": 36,
    "6xl": 48,
    "7xl": 60,
    "8xl": 72,
    "9xl": 96,
  },
  iconSize: {
    "3xs": 12,
    "2xs": 16,
    xs: 20,
    sm: 24,
    md: 28,
    lg: 32,
    xl: 36,
    "2xl": 40,
  },
  color: {
    ...theme.color,
  },
};

export type TSpacing = keyof typeof THEME.spacing;
