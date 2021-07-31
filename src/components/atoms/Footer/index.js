/* 
A Footer that displays text from the data file
*/
import React from "react";
import styled from "styled-components";
import data from "../../../data/default";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.primary};
  height: 80px;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledName = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.white};
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledName>{data.footer.text}</StyledName>
    </StyledFooter>
  );
};
