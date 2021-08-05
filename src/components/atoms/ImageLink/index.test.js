import React from "react";
import { ImageLink } from "./index";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const link =
  "https://play.google.com/store/apps/details?id=com.olioex.android&hl=en_GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
const image =
  "https://olioex.com/wp-content/uploads/2019/08/Google-Play-icon.png";
const width = 20;
const height = 20;
const alt = "Test ImageLink";

describe("ImageLink", () => {
  it("renders without crashing", () => {
    shallow(<ImageLink link={link} image={image} />);
  });

  it("renders an <a> with the href set to the link prop", () => {
    const imageLink = shallow(<ImageLink link={link} image={image} />);
    expect(imageLink.find("a").props().href).toBe(link);
  });

  it("renders an img with the src set to the image prop", () => {
    const imageLink = shallow(<ImageLink link={link} image={image} />);
    expect(imageLink.find("img").props().src).toBe(image);
  });

  it("renders an img with the alt set to the alt prop", () => {
    const imageLink = shallow(
      <ImageLink link={link} image={image} alt={alt} />
    );
    expect(imageLink.find("img").props().alt).toBe(alt);
  });

  it("renders an img with the width set to the width prop", () => {
    const imageLink = shallow(
      <ImageLink link={link} image={image} width={width} />
    );
    expect(imageLink.find("img").props().width).toBe(width);
  });

  it("renders an img with the height set to the height prop", () => {
    const imageLink = shallow(
      <ImageLink link={link} image={image} height={height} />
    );
    expect(imageLink.find("img").props().height).toBe(height);
  });
});
