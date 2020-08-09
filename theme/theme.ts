import { theme as chakraTheme } from "@chakra-ui/core";

export const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    primary: {
      50: "#e6e6ff",
      100: "#b7b8fe",
      200: "#8889f7",
      300: "#595af2",
      400: "#2b2bed",
      500: "#1212d4",
      600: "#0b0da6",
      700: "#060978",
      800: "#02054a",
      900: "#00011f",
    },
  },
};
