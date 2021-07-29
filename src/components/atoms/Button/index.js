import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const StyledContainer = styled.div`
  text-align: center;
`;

export const Button = ({ text }) => {
  return (
    <StyledContainer>
      <StyledButton>{text}</StyledButton>
    </StyledContainer>
  );
};
