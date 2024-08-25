import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Personal Portfolio Builder</Title>
  </HeaderContainer>
);


export default Header;