/* 
A Footer that displays text from the data file
*/
import React from "react";
import styled from "styled-components";
import data from "../../../data/default";
import { Label } from "../../atoms";

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

export const Footer = () => {
  return (
    <StyledFooter>
      <Label>{data.footer.text}</Label>
    </StyledFooter>
  );
};
