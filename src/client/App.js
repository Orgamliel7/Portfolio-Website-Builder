import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import backgroundImage from './assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    background-image: url(${backgroundImage});    
    background-size: cover;
    background-position: center;
    color: #333;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 40px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #3498db;
`;

const Name = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Bio = styled.p`
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto 20px;
  color: #34495e;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.5em;

  a {
    color: #3498db;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;
    }
  }
`;

const PortfolioSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
`;

const App = () => {
  const [portfolioItems] = useState([
    { id: 1, title: 'Project 1', description: 'A cool project', imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Project 2', description: 'Another awesome project', imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Project 3', description: 'Yet another great project', imageUrl: 'https://via.placeholder.com/300' },
  ]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Main>
          <ProfileSection>
            <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
            <Name>Or Gamliel</Name>
            <Bio>Passionate web developer with a knack for creating beautiful and functional websites.</Bio>
            <SocialLinks>
              <a href="mailto:orgamliel777@gmail.com"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/or-gamliel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Orgamliel7" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </SocialLinks>
          </ProfileSection>
          <PortfolioSection>
            {portfolioItems.map(item => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </PortfolioSection>
        </Main>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
