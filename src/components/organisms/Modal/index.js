import React from "react";
import styled from "styled-components";
import { Header, Caption } from "../../atoms";
import { ImageCluster } from "../../molecules";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 5px;
  width: 60vw;
  height: 80vh;
  top: 10vh;
  z-index: 1;
  overflow: scroll;

  @media screen and (max-width: 480px) {
    width: 80vw;
  }
`;

const StyledInformation = styled.div`
  margin-top: 20px;
`;

export const Modal = ({
  title,
  description,
  images,
  distance,
  town,
  country,
  collectionNotes,
  expiry,
  handleClick,
}) => {
  return (
    <StyledWrapper onClick={handleClick}>
      <StyledModal>
        <Header>{title}</Header>
        <ImageCluster images={images} />
        <StyledInformation>
          <Caption>{`Description: ${description}`}</Caption>
          <Caption>{`Address: ${town}, ${country}`}</Caption>
          <Caption>{`Collection Notes: ${collectionNotes}`}</Caption>
          <Caption>{`Expiry: ${expiry}`}</Caption>
        </StyledInformation>
      </StyledModal>
    </StyledWrapper>
  );
};

Modal.propTypes = {};
