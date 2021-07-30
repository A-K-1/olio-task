import React from "react";
import styled from "styled-components";
import { AppLinkCluster } from "../../molecules/AppLinkCluster";
import PropTypes from "prop-types";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.primary};
  height: 80px;
  padding: 10px 30px;

  @media screen and (max-width: 360px) {
    height: max-content;
    flex-direction: column;
  }
`;

const StyledLogo = styled.img`
  height: 55px;
  align-self: center;
`;

export const Navbar = ({ logo }) => {
  return (
    <StyledNavbar>
      <StyledLogo src={logo} />
      <AppLinkCluster />
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};
