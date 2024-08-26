import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import backgroundImage from './assets/background.jpg';
import selfImage from './assets/self.jpg';
import PortfolioForm from './components/PortfolioForm';

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
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #3498db;
  margin: 0 10px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #3498db;
`;

function profileImageSetter() {
  return (
    <ProfileImage src={selfImage} alt="Profile" />
  );
}

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
  const [userData, setUserData] = useState(null);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showLinkedInInput, setShowLinkedInInput] = useState(false);
  const [showGithubInput, setShowGithubInput] = useState(false);
  const [showProjectInput, setShowProjectInput] = useState(false);

  const handleFormSubmit = (formData) => {
    setUserData(formData);
  };

  const handleAdditionalInfo = (type, value) => {
    setUserData({ ...userData, [type]: value });
  };

  const handleAddProject = (project) => {
    setUserData({
      ...userData,
      projects: [...(userData.projects || []), { ...project, id: Date.now() }]
    });
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Main>
          {userData ? (
            <>
              <ProfileSection>
                <ProfileImage src={userData.profilePicture || selfImage} alt="Profile" />
                <Name>{userData.name}</Name>
                <Bio>Passionate web developer with a knack for creating beautiful and functional websites.</Bio>
                <SocialLinks>
                  {userData.email ? (
                    <a href={`mailto:${userData.email}`}><FaEnvelope /></a>
                  ) : (
                    <IconButton onClick={() => setShowEmailInput(!showEmailInput)}><FaPlus /><FaEnvelope /></IconButton>
                  )}
                  {userData.linkedin ? (
                    <a href={userData.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  ) : (
                    <IconButton onClick={() => setShowLinkedInInput(!showLinkedInInput)}><FaPlus /><FaLinkedin /></IconButton>
                  )}
                  {userData.github ? (
                    <a href={userData.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  ) : (
                    <IconButton onClick={() => setShowGithubInput(!showGithubInput)}><FaPlus /><FaGithub /></IconButton>
                  )}
                </SocialLinks>
                {showEmailInput && (
                  <StyledInput
                    type="email"
                    placeholder="Enter your email"
                    onBlur={(e) => handleAdditionalInfo('email', e.target.value)}
                  />
                )}
                {showLinkedInInput && (
                  <StyledInput
                    type="url"
                    placeholder="Enter your LinkedIn URL"
                    onBlur={(e) => handleAdditionalInfo('linkedin', e.target.value)}
                  />
                )}
                {showGithubInput && (
                  <StyledInput
                    type="url"
                    placeholder="Enter your GitHub URL"
                    onBlur={(e) => handleAdditionalInfo('github', e.target.value)}
                  />
                )}
              </ProfileSection>
              <PortfolioSection>
                {userData.projects && userData.projects.map(item => (
                  <PortfolioItem key={item.id} {...item} />
                ))}
                <IconButton onClick={() => setShowProjectInput(!showProjectInput)}><FaPlus /> Add Project</IconButton>
                {showProjectInput && (
                  <ProjectForm onSubmit={handleAddProject} />
                )}
              </PortfolioSection>
            </>
          ) : (
            <PortfolioForm onSubmit={handleFormSubmit} />
          )}
        </Main>
        <Footer />
      </AppContainer>
    </>
  );
};

const ProjectForm = ({ onSubmit }) => {
  const [project, setProject] = useState({ title: '', description: '', imageUrl: '', projectUrl: '' });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
    setProject({ title: '', description: '', imageUrl: '', projectUrl: '' });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        required
      />
      <StyledInput
        type="text"
        name="description"
        placeholder="Project Description"
        value={project.description}
        onChange={handleChange}
      />
      <StyledInput
        type="url"
        name="imageUrl"
        placeholder="Project Image URL"
        value={project.imageUrl}
        onChange={handleChange}
      />
      <StyledInput
        type="url"
        name="projectUrl"
        placeholder="Project URL"
        value={project.projectUrl}
        onChange={handleChange}
      />
      <StyledButton type="submit">Add Project</StyledButton>
    </StyledForm>
  );
};



export default App;
