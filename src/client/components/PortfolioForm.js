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

const StyledTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
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

const FileInput = styled.div`
  border: 2px dashed #ddd;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
  color: #999;
  background-color: #f9f9f9;

  &:hover {
    border-color: #3498db;
    color: #3498db;
  }

  input {
    display: none;
  }
`;

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    profilePicture: '',
    description: 'Passionate web developer with a knack for creating beautiful and functional websites.',
  });

  const handleChange = (e) => {
    if (e.target.name === 'profilePicture') {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profilePicture: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
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
        <FileInput
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput').click()}
        >
          {formData.profilePicture
            ? <img src={formData.profilePicture} alt="Profile Preview" style={{ maxWidth: '100%', borderRadius: '4px' }} />
            : 'Drag & drop your profile picture here or click to browse'}
          <input
            type="file"
            id="fileInput"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
          />
        </FileInput>
        <StyledTextarea
          name="description"
          placeholder="Your Description (Optional)"
          value={formData.description}
          onChange={handleChange}
          rows="4"
        />
        <StyledButton type="submit">Create Portfolio</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PortfolioForm;
