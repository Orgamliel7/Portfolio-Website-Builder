import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
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
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.5em;
`;

const PortfolioSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const App = () => {
  const [portfolioItems] = useState([
    { id: 1, title: 'Project 1', description: 'A cool project', imageUrl: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Project 2', description: 'Another awesome project', imageUrl: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Project 3', description: 'Yet another great project', imageUrl: 'https://via.placeholder.com/300' },
  ]);

  return (
    <AppContainer>
      <Header />
      <Main>
        <ProfileSection>
          <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
          <Name>John Doe</Name>
          <Bio>Passionate web developer with a knack for creating beautiful and functional websites.</Bio>
          <SocialLinks>
            <FaEnvelope />
            <FaLinkedin />
            <FaGithub />
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
  );
};

export default App;