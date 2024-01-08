import React from "react";
import Books from "./presentation/Books";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Books />
    </ThemeProvider>
  );
};

export default App;
