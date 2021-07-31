import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledItemImage = styled.img`
  width: 200px;
`;

export const ImageCluster = ({ images }) => {
  console.log(images);
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

ImageCluster.propTypes = {
  images: PropTypes.array,
};

ImageCluster.defaultProps = {
  images: [],
};
