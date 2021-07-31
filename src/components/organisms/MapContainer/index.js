import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import styled from "styled-components";
import { Context } from "../../../contexts/Store";
import MapMarker from "../../molecules/MapMarker";
import { Modal } from "../../organisms";
// import { reducer } from "../../../contexts/Reducer";

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
  // const [state, dispatch] = useReducer(reducer);
  const [state, dispatch] = useContext(Context);
  const [viewed, setViewed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (state.itemData) setMarkers(state.itemData);
  }, [state.itemData]);

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

  const handleClickModal = () => {
    setShowModal(!showModal);
  };

  const onMarkerClick = (itemId) => {
    const itemIndex = state.itemData.findIndex((index) => index.id === itemId);

    setViewed([
      ...viewed,
      {
        index: itemIndex,
        clicked: true,
      },
    ]);
    setShowModal(true);
    setModalData(state.itemData[itemIndex]);

    dispatch({
      type: "ADD_CLICKED_ITEM_LIST",
      payload: {
        clickedItems: [
          ...viewed,
          {
            index: itemIndex,
            clicked: true,
          },
        ],
      },
    });
  };

  return (
    <StyledMapWrapper>
      {showModal && (
        <Modal
          title={modalData.title}
          description={modalData.description}
          images={modalData.images}
          distance={modalData.location.distance}
          town={modalData.location.town}
          country={modalData.location.country}
          collectionNotes={modalData.collection_notes}
          expiry={modalData.expiry}
          handleClick={handleClickModal}
        />
      )}
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
                      120
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
            <MapMarker
              key={"item" + index}
              itemId={markerData.id}
              title={markerData.title}
              lat={latitude}
              lng={longitude}
              handleClick={onMarkerClick}
            />
          );
        })}
      </GoogleMapReact>
    </StyledMapWrapper>
  );
};
