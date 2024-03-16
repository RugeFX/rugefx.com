import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProvider from "./contexts/theme-provider";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="system">
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
