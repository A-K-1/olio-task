import React from "react";
import { Caption } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Caption", () => {
  it("renders without crashing", () => {
    shallow(
      <ThemeProvider theme={theme}>
        <Caption>Test</Caption>
      </ThemeProvider>
    );
  });

  it("should render children inside a <p> tag", () => {
    const caption = shallow(
      <ThemeProvider theme={theme}>
        <Caption>Test Caption</Caption>
      </ThemeProvider>
    );
    expect(caption).toHaveLength(1);
    expect(caption.text()).toEqual("Test Caption");
  });
});
