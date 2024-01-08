import { createTheme, Theme } from "@mui/material/styles";

interface ColorPalette {
  heading: string;
  bgColor: string;
}

interface ColorShades {
  main: string;
  light?: string;
  dark?: string;
  gray?: string;
}

interface ThemePalette {
  primary: ColorShades & {
    blue: string;
    darkBlue: string;
  };
  secondary: ColorShades & {
    lightGray: string;
    gray: string;
    darkBlue: string;
  };
  natural: ColorShades & {
    gray: string;
  };
  info: ColorShades & {
    light: string;
    dark: string;
  };
  white: ColorShades & {
    light: string;
  };
  warning: ColorShades & {
    light: string;
  };
  error: ColorShades & {
    light: string;
  };
  black: ColorShades & {
    dark: string;
  };
}

const color: ColorPalette = {
  heading: "#0f2448",
  bgColor: "#0C0F27",
};

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#6ca12b",
      blue: "#1F2454",
      darkBlue: "#0C0F27",
    },
    secondary: {
      main: "#fd89ff",
      lightGray: "#f2f2f2",
      gray: "#858585",
      darkBlue: "#1F2454",
    },
    natural: {
      main: "#B0D9B1",
      gray: "#a4a4a4",
    },
  } as ThemePalette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: color.bgColor,
          "& a": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "@media (min-width: 1200px)": {
            maxWidth: 1400,
          },
          "@media (min-width: 1500px)": {
            maxWidth: "1400px",
          },
        },
      },
    },
  },
});

export default theme;
