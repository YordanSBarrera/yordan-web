import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router";
import "./config/i18next.config.ts";

const theme = createTheme({
  typography: {
    fontFamily: "Centra, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback="Loading language...">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
