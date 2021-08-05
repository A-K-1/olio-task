import React from "react";
import { AppLinkCluster } from "./index";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import data from "../../../data/default";

Enzyme.configure({ adapter: new Adapter() });

const numberOfLinks = data.appLinks.length;

describe("AppLinkCluster", () => {
  it("renders without crashing", () => {
    shallow(<AppLinkCluster />);
  });

  it("renders the correct number of ImageLinks", () => {
    const appLinkCluster = shallow(<AppLinkCluster />);
    expect(appLinkCluster.props().children.length).toBe(numberOfLinks);
  });

  it("passes the mobile image prop to ImageLink if page width <= 768px", () => {
    // set page width
    global.innerWidth = 500;

    const appLinkCluster = shallow(<AppLinkCluster />);

    // get first ImageLink props
    const childImageLink =
      appLinkCluster.props().children[0].props.children.props.image;

    expect(childImageLink).toEqual(data.appLinks[0].mobileImage);
  });

  it("passes the mobile image prop to ImageLink if page width > 768px", () => {
    global.innerWidth = 1500;
    const appLinkCluster = shallow(<AppLinkCluster />);
    const childImageLink =
      appLinkCluster.props().children[0].props.children.props.image;

    expect(childImageLink).toEqual(data.appLinks[0].image);
  });
});
