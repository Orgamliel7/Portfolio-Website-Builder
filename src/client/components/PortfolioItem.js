import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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
`;

const ItemDescription = styled.p`
  margin: 0;  
`;

const PortfolioItem = ({ title, description, imageUrl }) => (
  <ItemContainer>
    <ItemImage src={imageUrl} alt={title} />
    <ItemContent>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemContent>
  </ItemContainer>
);

export default PortfolioItem;