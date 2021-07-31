import React from "react";
import styled from "styled-components";
import { Header } from "../../atoms";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 1;
  padding: 0 100px;

  @media screen and (max-width: 360px) {
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
  left: 20vw;
  z-index: 1;

  opacity: 0 @media screen and (max-width: 360px) {

  }
`;

export const Modal = ({ data, handleClick }) => {
  console.log(data);
  return (
    <StyledWrapper onClick={handleClick}>
      <StyledModal>
        <Header>{data.title}</Header>
      </StyledModal>
    </StyledWrapper>
  );
};

Modal.propTypes = {};
