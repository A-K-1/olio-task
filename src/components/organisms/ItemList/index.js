import React, { useState, useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { ItemCard } from "../../molecules/index";
import { AuthContext } from "../../../App";
import { reducer } from "../../../contexts/reducer";
import { Modal } from "../../organisms";
import { Header } from "../../atoms";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledListWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 0 40px;
  grid-gap: 100px 0;
  margin-top: 80px;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [state, dispatch] = useReducer(reducer);
  const { state: globalState } = useContext(AuthContext);

  useEffect(() => {
    if (globalState.itemData) setItems(globalState.itemData);
  }, [globalState.itemData]);

  const handleClickItem = (index) => {
    console.log("clicked");
    setViewed([
      ...viewed,
      {
        index: index,
        clicked: true,
      },
    ]);
    setShowModal(true);
    setModalData(globalState.itemData[index]);

    dispatch({
      type: "ADD_CLICKED_ITEM_LIST",
      payload: {
        clickedItems: [
          ...viewed,
          {
            index: index,
            clicked: true,
          },
        ],
      },
    });
  };

  const handleClickModal = () => {
    setShowModal(!showModal);
  };

  console.log("modalData", modalData);
  return (
    <StyledWrapper>
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
      <Header>Items</Header>
      <StyledListWrapper>
        {items.map((item, index) => (
          <ItemCard
            key={"itemCard" + index}
            itemName={item.title}
            description={item.description}
            image={item.images[0].files.medium}
            handleClick={handleClickItem}
            index={index}
            viewed={state?.clickedItems && state.clickedItems}
          />
        ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
};
