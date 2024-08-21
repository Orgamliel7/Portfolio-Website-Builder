import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  margin-top: 40px;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Personal Portfolio Builder. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;