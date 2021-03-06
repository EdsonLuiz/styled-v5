import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link as AlternativeLink, useLocation } from "react-router-dom";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? `block` : `none`)};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  font-family: "Open Sans", sans-serif;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background-color: #fff;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
    border-bottom: none;
    width: initial;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;

  > div {
    height: 3px;
    background-color: #333335;
    border-radius: 999px;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <AlternativeLink {...props}>{children}</AlternativeLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? `bold` : `normal`)};
  color: ${(p) => p.theme.front};
`;

export const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle isActive={id === "dark"} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
};
