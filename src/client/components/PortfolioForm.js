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
  
  &:hover {
    background-color: #2980b9;
  }
`;

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    linkedin: '',
    email: '',
    profilePicture: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <StyledButton type="submit">Create Portfolio</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PortfolioForm;