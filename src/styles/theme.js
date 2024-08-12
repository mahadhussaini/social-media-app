import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // A vibrant blue
    },
    secondary: {
      main: "#dc004e", // A bold pink
    },
    background: {
      default: "#e3f2fd", // A light, calming blue background
      paper: "#ffffff", // White background for paper elements
    },
    text: {
      primary: "#333333", // Dark gray for text
      secondary: "#666666", // Medium gray for secondary text
    },
  },
  typography: {
    fontSize: 14,
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600, // Make heading slightly bolder
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Slightly more rounded corners
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Deeper shadow for a more pronounced effect
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 600, // Slightly bolder text for buttons
        },
        contained: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow to contained buttons for depth
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for the AppBar
        },
      },
    },
  },
});

export default theme;
