import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./themes/default";
import Store from "./contexts/Store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Store>
        <App />
      </Store>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
