import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#e3f2fd",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontSize: 14,
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
