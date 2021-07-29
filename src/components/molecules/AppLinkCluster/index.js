import React from "react";
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
  return (
    <StyledWrapper>
      {data.appLinks.map((appLink, index) => {
        return (
          <StyledImageLinkWrapper key={"imageLinkWrapper" + index}>
            <ImageLink
              key={"imageLink" + index}
              link={appLink.link}
              image={appLink.image}
            />
          </StyledImageLinkWrapper>
        );
      })}
    </StyledWrapper>
  );
};
