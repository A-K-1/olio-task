import React from "react";
import MapMarker from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const itemId = 1;
const title = "Test title";
const handleClick = () => {};

it("renders without crashing", () => {
  shallow(
    <ThemeProvider theme={theme}>
      <MapMarker itemId={itemId} title={title} handleClick={handleClick} />
    </ThemeProvider>
  );
});
