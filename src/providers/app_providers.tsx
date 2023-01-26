import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppProvider = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
