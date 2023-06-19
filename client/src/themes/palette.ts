declare module "@mui/material/styles" {
  interface PaletteColor {
    hoverContrastText?: string;
  }
  interface Palette {
    red: Palette["primary"];
    yellow: Palette["primary"];
    orange: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
    pink: Palette["primary"];
  }

  interface PaletteOptions {
    red: PaletteOptions["primary"];
    yellow: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
  }
}

const grey = {
  50: "#F3F3F3",
  100: "#DEDEDE",
  200: "#E2E2E2",
  300: "#AAAAAA",
  700: "#666666",
  800: "#434343",
  900: "#EBEBEB",
};

const palette = {
  primary: {
    light: "rgb(255, 255, 255)",
    main: "rgb(199, 0, 12)",
    dark: "rgb(0, 0, 0)",
    contrastText: "rgb(67, 67, 67)",
    hoverContrastText: "rgba(199, 0, 12, 0.10)",
  },
  secondary: {
    light: "rgb(245, 245, 245)",
    main: "rgb(0, 0, 0)",
    contrastText: "rgb(74, 74, 74)",
    hoverContrastText: "rgba(112, 112, 112)",
  },
  red: {
    main: "rgb(222, 91, 87)",
    light: "rgb(204,25,35)",
  },
  yellow: {
    main: "rgb(221, 194, 102)",
  },
  orange: {
    main: "rgb(227, 150, 53)",
  },
  green: {
    main: "rgb(122, 208, 179)",
  },
  blue: {
    main: "rgb(102, 161, 221)",
  },
  pink: {
    main: "rgb(251, 235, 235)",
  },
  grey,
};

export default palette;
