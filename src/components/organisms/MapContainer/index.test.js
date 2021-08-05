import React from "react";
import { MapContainer } from "./index";
import Store from "../../../contexts/Store";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(
    <Store>
      <MapContainer />
    </Store>
  );
});
