import React from "react";
import { ImageCluster } from "./index";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const images = [
  {
    dimensions: { width: 720, height: 960 },
    uid: "00gRGrBRDFYrR2j-9SJVYg",
    files: {
      large:
        "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/large_image.jpg",
      medium:
        "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/medium_image.jpg",
      original:
        "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/image.jpg",
      small:
        "https://cdn.olioex.com/uploads/photo/file/Y9d--jZv7f0GoLDn3SbH6A/small_image.jpg",
    },
  },
];
it("renders without crashing", () => {
  shallow(<ImageCluster images={images} />);
});
