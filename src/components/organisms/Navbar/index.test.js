import React from "react";
import { Navbar } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";

const logo =
  "https://olioex.com/wp-content/uploads/2019/08/Google-Play-icon.png";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Navbar logo={logo} />
    </ThemeProvider>,
    div
  );
});
