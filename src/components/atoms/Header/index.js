import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const Header = styled.p`
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.primary};
  margin: 0 0 100px;

  @media screen and (max-width: 480px) {
    font-size: 2.125rem;
  }

  align-self: center;
`;

// Heading.propTypes = {
//   level: PropTypes.number,
//   children: PropTypes.node,
//   palette: PropTypes.string,
//   reverse: PropTypes.bool,
// }

// Heading.defaultProps = {
//   level: 1,
//   palette: 'grayscale',
// }

export default Header;
