 import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
     <HelmetProvider>
        <App />
     </HelmetProvider>
    </React.StrictMode>
  );
}
