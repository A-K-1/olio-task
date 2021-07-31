import React from "react";
import { ImageLink } from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/default";
import ReactDOM from "react-dom";

const link =
  "https://play.google.com/store/apps/details?id=com.olioex.android&hl=en_GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";
const image =
  "https://olioex.com/wp-content/uploads/2019/08/Google-Play-icon.png";
const width = 20;
const height = 20;
const alt = "Test ImageLink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ImageLink
        link={link}
        image={image}
        width={width}
        height={height}
        alt={alt}
      />
    </ThemeProvider>,
    div
  );
});
