import React, { useState, useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { ItemCard } from "../../molecules/index";
import { AuthContext } from "../../../App";
import { reducer } from "../../../contexts/reducer";
import { Modal } from "../../organisms";
import { Header } from "../../atoms";
// import PropTypes from "prop-types";

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

  console.log("globalState", state);
  return (
    <StyledWrapper>
      {showModal && <Modal data={modalData} handleClick={handleClickModal} />}
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

// ItemList.propTypes = {};
