import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #f8f8f8;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; 2024 Personal Portfolio Builder. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
