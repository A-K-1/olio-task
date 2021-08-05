import React from "react";
import { Navbar } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const logo =
  "https://olioex.com/wp-content/uploads/2019/08/Google-Play-icon.png";

it("renders without crashing", () => {
  shallow(
    <ThemeProvider theme={theme}>
      <Navbar logo={logo} />
    </ThemeProvider>
  );
});
