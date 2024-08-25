import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #3498db;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: white;
  font-size: 2em;
  margin: 0;
`;

const NavMenu = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.1em;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>Personal Portfolio Builder</Title>
    <NavMenu>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavMenu>
  </HeaderContainer>
);

export default Header;