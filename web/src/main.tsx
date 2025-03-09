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

  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";
  
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
