import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import data from "../../../data/default";

const StyledClusterWrapper = styled.div`
  color: #fff;
  background: #1978c8;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Marker = ({ children }) => children;

export const MapMarker = ({
  item,
  index,
  handleClick,
  cluster,
  supercluster,
  mapRef,
  pointCount,
  latitude,
  longitude,
}) => {
  console.log(latitude);
  console.log(longitude);
  if (cluster) {
    return (
      <Marker key={"item" + index} lat={latitude} lng={longitude}>
        <StyledClusterWrapper
          className="cluster-marker"
          style={{
            width: 20,
            height: 20,
          }}
          onClick={() => {
            const expansionZoom = Math.min(
              supercluster.getClusterExpansionZoom(cluster.id),
              20
            );
            mapRef.current.setZoom(expansionZoom);
            mapRef.current.panTo({ lat: latitude, lng: longitude });
          }}
        >
          {pointCount}
        </StyledClusterWrapper>
      </Marker>
    );
  }
  return (
    <Marker key={"item" + index} lat={latitude} lng={longitude}>
      <Icon
        icon={data.mapResources.markerIcon}
        color="#bb4291"
        width={30}
        height={30}
      />
    </Marker>
  );
};

// const mapDispatchToProps = dispatch => ({
//   handleClick: lac => dispatch(ActionCreators.setPerimeterSelectedLac(lac))
// })

//   <MapMarker
//     index={index}
//     cluster={cluster}
//     supercluster={supercluster}
//     mapRef={mapRef}
//     pointCount={pointCount}
//     latitude={latitude}
//     longitude={longitude}
//   />
