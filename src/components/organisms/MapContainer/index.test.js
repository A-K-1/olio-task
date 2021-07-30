import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";
import { MapContainer } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <MapContainer />
    </ThemeProvider>,
    div
  );
});
