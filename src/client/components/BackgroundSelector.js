import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ImageOption = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid ${props => (props.selected ? '#3498db' : 'transparent')};
  cursor: pointer;
  border-radius: 8px;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #3498db;
  }
`;

const BackgroundSelector = ({ onSelect, selectedBackground }) => {
  const images = [
    { src: './assets/Lake.jpg', alt: 'Lake' },
    { src: './assets/Sea.jpg', alt: 'Sea' },
    { src: './assets/Ocean.jpg', alt: 'Ocean' },
  ];

  return (
    <Container>
      {images.map(image => (
        <ImageOption
          key={image.alt}
          src={image.src}
          alt={image.alt}
          selected={selectedBackground === image.src}
          onClick={() => onSelect(image.src)}
        />
      ))}
    </Container>
  );
};

export default BackgroundSelector;
