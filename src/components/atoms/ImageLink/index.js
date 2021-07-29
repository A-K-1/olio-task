import React from "react";
import PropTypes from "prop-types";

export const ImageLink = ({ link, image, width, height, alt }) => {
  return (
    <div>
      <a href={link} rel="noreferrer" target="_blank">
        <img alt={alt} src={image} width={width} height={height} />
      </a>
    </div>
  );
};

ImageLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

ImageLink.defaultProps = {
  height: 38,
  alt: "Download App",
};
