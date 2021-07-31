import React, { useState, useRef, useEffect, useContext } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import { Icon } from "@iconify/react";
import data from "../../../data/default";
import styled from "styled-components";
import { AuthContext } from "../../../App";

const StyledMapWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const StyledClusterWrapper = styled.div`
  color: #fff;
  background: #1978c8;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const Marker = ({ children }) => children;

export const MapContainer = () => {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(5);
  const [markers, setMarkers] = useState([]);
  const { state: globalState } = useContext(AuthContext);

  useEffect(() => {
    if (globalState.itemData) setMarkers(globalState.itemData);
  }, [globalState.itemData]);

  const points = markers.map((item) => ({
    type: "Feature",
    properties: { cluster: false, data: item },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(item.location.longitude),
        parseFloat(item.location.latitude),
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <StyledMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={{ lat: 51.7645, lng: -3.79124 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster, index) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
            data: markerData,
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker key={"item" + index} lat={latitude} lng={longitude}>
                <StyledClusterWrapper
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
              <p>{markerData.title}</p>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </StyledMapWrapper>
  );
};
