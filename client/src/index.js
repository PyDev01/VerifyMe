import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppState from "./context/AppState";
import { MetaMaskProvider } from "metamask-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppState>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </AppState>
  // </React.StrictMode>
);
