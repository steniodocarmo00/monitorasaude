import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    green: {
      10: "#D9E0DA",
      20: "#CCDBCF",
      30: "#C0D6C4",
      40: "#B3D1B9",
      50: "#A7CDAE",
      60: "#9BC9A4",
      70: "#8EC398",
      80: "#82BF8E",
      90: "#75B982",
      100: "#69B578",
    },
    black: {
      10: "#BFC0C0",
      30: "#999B9B",
      50: "#737777",
      80: "#4D5252",
      100: "#272D2D",
    },
    blue: {
      10: "#C2D1DC",
      20: "#B0C7D7",
      30: "#9EBDD3",
      40: "#8DB3CE",
      50: "#7CA9CA",
      60: "#699EC5",
      70: "#5895C1",
      80: "#468ABC",
      100: "#3581B8",
    },
    white: "#FFFFFF",
  },
  fonts: {
    regular: "Quicksand_400Regular",
    bold: "Quicksand_700Bold",
    semibold: "Quicksand_600SemiBold",
  },

  font_size: {
    "2xs": 8,
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    "2xl": 20,
    "3xl": 40,
  },
  sizes: {
    13: 52,
    14: 56,
    15: 60,
    90: 360,
    
  },
});
