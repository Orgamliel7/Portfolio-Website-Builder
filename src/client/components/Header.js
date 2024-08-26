import React from 'react';
import styled from 'styled-components';

// Header container with transparent background
const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Fresh, modern title styling
const Title = styled.h1`
  color: #ffffff; /* White color for contrast */
  font-size: 5.5em; /* Larger size for emphasis */
  margin: 0;
  font-family: 'Lobster', cursive; /* Modern cursive font */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow for better readability */
`;

// Navigation menu styling
const NavMenu = styled.nav`
  margin-top: 10px;
`;

// Navigation link styling with background color and hover effects
const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1em;
  background-color: #3498db; /* Light blue background */
  padding: 10px 20px; /* Padding for better appearance */
  border-radius: 5px; 
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: #2980b9; 
    opacity: 0.8;
  }
`;

// Header component with updated styles
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
