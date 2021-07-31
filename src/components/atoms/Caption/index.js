/* 
A styled caption component that uses a grey color
*/
import styled from "styled-components";

export const Caption = styled.p`
  color: ${(props) => props.theme.palette.grey};
  font-style: italic;
  font-size: 1rem;
  line-height: normal;
  overflow: scroll;
  white-space: pre-line;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  :: -webkit-scrollbar {
    width: 0;
  }
`;

export default Caption;
