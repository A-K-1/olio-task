import React from "react";
import { Caption } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Caption>Test Caption</Caption>
    </ThemeProvider>,
    div
  );
});
