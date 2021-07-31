/*
An organism that displays a number of ItemCards in a responsive grid
A modal will display when a card is clicked
*/
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ItemCard } from "../../molecules/index";
import { Context } from "../../../contexts/Store";
// import { reducer } from "../../../contexts/Reducer";
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
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [state, dispatch] = useContext(Context);

  // if there are items in the store, set these in the items variable
  useEffect(() => {
    if (state.itemData) setItems(state.itemData);
  }, [state.itemData]);

  // when an item is clicked, add it to the array of viewed items and set the state
  const handleClickItem = (index) => {
    // show the modal and set the correct item data to show in the modal
    setShowModal(true);
    setModalData(state.itemData[index]);

    // set the global state, append the new clicked item to the list of items already in the store
    dispatch({
      type: "ADD_CLICKED_ITEM_LIST",
      payload: {
        clickedItems: [
          ...state.clickedItems,
          {
            index: index,
            clicked: true,
          },
        ],
      },
    });
  };

  // handle the display of the modal. Clicking anywhere while the modal is open will close it
  const handleClickModal = () => {
    setShowModal(!showModal);
  };

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
