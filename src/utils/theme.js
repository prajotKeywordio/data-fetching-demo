import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    blue: {
      main: "#0195FF",
      background: "#E0F2FF",
    },
    orange: {
      main: "#FE9448",
      background: "#FFF0E7",
    },
    green: {
      main: "#1DB949",
      background: "#E3F7E9",
    },
    error: {
      main: "#E13F2A",
    },
  },
  shadows: [
    "none",
    "0px 0px 10px rgba(0,0,0,.08)",
    "0px 0px 10px rgba(0,0,0,.16)",
    "0px 3px 10px rgba(0,0,0,.08)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#3D4955",
    },
    h2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#3D4955",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "0.875rem",
          fontWeight: 400,
          backgroundColor: "#F5F6FA",
        },
      },
    },
  },
});

export { theme };
