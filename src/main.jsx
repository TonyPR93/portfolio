import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.jsx";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

inject();
injectSpeedInsights();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
