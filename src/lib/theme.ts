"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    body1: {
      color: "#000000",
      fontSize: "28px",
      fontWeight: 600,
    },
    body2: { color: "#464646", fontSize: "1rem", lineHeight: 1.5 },
  },
});

export default theme;
