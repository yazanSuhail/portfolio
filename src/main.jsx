import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./contexts";
import { RoutesApp } from "./routes/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RoutesApp />
    </AppProvider>
  </React.StrictMode>
);
