import React from "react";
import { Header } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(
    <ThemeProvider theme={theme}>
      <Header>Test Header</Header>
    </ThemeProvider>
  );
});
