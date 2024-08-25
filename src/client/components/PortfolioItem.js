import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 20px;
`;

const ItemTitle = styled.h3`
  margin: 0 0 10px;
  color: #2c3e50;
`;

const ItemDescription = styled.p`
  margin: 0;
  color: #34495e;
`;

const ItemLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 15px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const PortfolioItem = ({ title, description, imageUrl, projectUrl }) => (
  <ItemContainer>
    <ItemImage src={imageUrl} alt={title} />
    <ItemContent>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
      <ItemLink href={projectUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </ItemLink>
    </ItemContent>
  </ItemContainer>
);

export default PortfolioItem;