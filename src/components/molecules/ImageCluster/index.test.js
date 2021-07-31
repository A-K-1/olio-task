import React from "react";
import { ImageCluster } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";

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
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ImageCluster images={images} />
    </ThemeProvider>,
    div
  );
});
