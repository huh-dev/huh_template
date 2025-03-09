import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import '@mantine/core/styles.css';
import { isEnvBrowser } from "./utils/misc";
import { MantineProvider } from "@mantine/core";
import StartComponent from "./components/StartComponent";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { LocaleProvider } from "./providers/LocaleProvider";
import App from "./App";
import { theme } from "./theme";

const root = document.getElementById("root");

// For development preview, render CharacterSelector directly
if (isEnvBrowser()) {
  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <LocaleProvider>
        <MantineProvider theme={theme}>
          <StartComponent />
        </MantineProvider>
      </LocaleProvider>
    </React.StrictMode>
  );
} else {
  // Full app with providers for production
  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <VisibilityProvider>
        <LocaleProvider>
          <MantineProvider theme={theme}>
            <App />
          </MantineProvider>
        </LocaleProvider>
      </VisibilityProvider>
    </React.StrictMode>
  );
}
