import React from "react";
import MapMarker from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";

const itemId = 1;
const title = "Test title";
const handleClick = () => {};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <MapMarker itemId={itemId} title={title} handleClick={handleClick} />
    </ThemeProvider>,
    div
  );
});
