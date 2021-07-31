import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImageLink } from "../../atoms";
import data from "../../../data/default";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledItemImage = styled.img`
  width: 200px;
`;

export const ImageCluster = ({ images }) => {
  return (
    <StyledWrapper>
      {images.map((image, index) => {
        console.log("imgcluster", image);
        return (
          <StyledItemImage
            key={"itemImage" + index}
            src={image.files.original}
            alt="Item"
          ></StyledItemImage>
        );
      })}
    </StyledWrapper>
  );
};
