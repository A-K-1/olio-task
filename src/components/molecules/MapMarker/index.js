import React from "react";
import data from "../../../data/default";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledWrapper = styled.div``;

const StyledMarkerTitle = styled.p`
  margin-top: 0 !important;
  font-size: 0.875rem;
  width: 150px;
  color: white;
  font-weight: 700;
`;

const MapMarker = ({ itemId, title, handleClick }) => {
  return (
    <StyledWrapper onClick={() => handleClick(itemId)}>
      <Icon
        icon={data.mapResources.markerIcon}
        color="#bb4291"
        width={30}
        height={30}
      />
      <StyledMarkerTitle>{title}</StyledMarkerTitle>
    </StyledWrapper>
  );
};

export default MapMarker;
