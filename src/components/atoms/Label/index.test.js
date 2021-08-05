import React from "react";
import { Label } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Label", () => {
  it("renders without crashing", () => {
    shallow(
      <ThemeProvider theme={theme}>
        <Label>Test</Label>
      </ThemeProvider>
    );
  });

  it("should render children inside a <p> tag", () => {
    const label = shallow(
      <ThemeProvider theme={theme}>
        <Label>Test Label</Label>
      </ThemeProvider>
    );
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual("Test Label");
  });
});
