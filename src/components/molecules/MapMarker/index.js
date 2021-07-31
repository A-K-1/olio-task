/* 
A molecule that creates a custom Marker to be used on the MapContainer. 
A custom icon is used which pulls from the data/default.js file
*/
import React from "react";
import data from "../../../data/default";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIcon = styled(Icon)`
  color: ${(props) => props.theme.palette.secondary};
`;

const StyledMarkerTitle = styled.p`
  margin-top: 0 !important;
  font-size: 0.875rem;
  width: 150px;
  color: white;
  font-weight: 700;
`;

const MapMarker = ({ itemId, title, handleClick }) => {
  return (
    <div onClick={() => handleClick(itemId)}>
      <StyledIcon icon={data.mapResources.markerIcon} width={30} height={30} />
      <StyledMarkerTitle>{title}</StyledMarkerTitle>
    </div>
  );
};

export default MapMarker;

MapMarker.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string,
  handleClick: PropTypes.func,
};

MapMarker.defaultProps = {};
