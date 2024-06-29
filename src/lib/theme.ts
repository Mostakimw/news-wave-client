"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#674cc4",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    body1: {
      color: "#000000",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body2: { color: "#464646", fontSize: "1rem" },
  },
});

export default theme;
