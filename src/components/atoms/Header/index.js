/* 
A styled header component used for page headings
*/
import styled from "styled-components";

export const Header = styled.p`
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.primary};

  @media screen and (max-width: 480px) {
    font-size: 2.125rem;
  }

  align-self: center;
`;

export default Header;
