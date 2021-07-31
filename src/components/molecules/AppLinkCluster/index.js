/* 
A molecule which uses the ImageLink atom to display a number of ImageLinks side by side
*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImageLink } from "../../atoms";
import data from "../../../data/default";

const StyledWrapper = styled.div`
  display: flex;
  align-self: center;
`;

const StyledImageLinkWrapper = styled.div`
  margin: 0 10px;
`;

export const AppLinkCluster = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  // When the page is resized, call the handleResize function to set the pageWidth state
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  });

  // loop through the appLink array
  return (
    <StyledWrapper>
      {data.appLinks.map((appLink, index) => {
        return (
          <StyledImageLinkWrapper key={"imageLinkWrapper" + index}>
            <ImageLink
              key={"imageLink" + index}
              link={appLink.link}
              image={pageWidth > 768 ? appLink.image : appLink.mobileImage}
            />
          </StyledImageLinkWrapper>
        );
      })}
    </StyledWrapper>
  );
};
