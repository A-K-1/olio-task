/* 
A styled label component 
*/
import styled from "styled-components";

// to-do: add props that control colour, size, font style
export const Label = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.white};
`;
