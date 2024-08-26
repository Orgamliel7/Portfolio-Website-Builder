import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 20px auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const ProjectContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    linkedin: '',
    email: '',
    profilePicture: '',
    projects: []
  });

  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e) => {
    setCurrentProject({ ...currentProject, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { ...currentProject, id: Date.now() }]
    });
    setCurrentProject({ title: '', description: '', imageUrl: '', projectUrl: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
        />
        <StyledInput
          type="url"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          name="profilePicture"
          placeholder="Profile Picture URL"
          value={formData.profilePicture}
          onChange={handleChange}
        />
        
        <h3>Add Projects</h3>
        <ProjectContainer>
          <StyledInput
            type="text"
            name="title"
            placeholder="Project Title"
            value={currentProject.title}
            onChange={handleProjectChange}
          />
          <StyledInput
            type="text"
            name="description"
            placeholder="Project Description"
            value={currentProject.description}
            onChange={handleProjectChange}
          />
          <StyledInput
            type="text"
            name="imageUrl"
            placeholder="Project Image URL"
            value={currentProject.imageUrl}
            onChange={handleProjectChange}
          />
          <StyledInput
            type="text"
            name="projectUrl"
            placeholder="Project URL"
            value={currentProject.projectUrl}
            onChange={handleProjectChange}
          />
          <StyledButton type="button" onClick={addProject}>Add Project</StyledButton>
        </ProjectContainer>
        
        {formData.projects.map((project, index) => (
          <div key={project.id}>Project {index + 1}: {project.title}</div>
        ))}
        
        <StyledButton type="submit">Create Portfolio</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PortfolioForm;