import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BackgroundSelector from './BackgroundSelector';

describe('BackgroundSelector', () => {
  test('renders all background options', () => {
    const { getByAltText } = render(<BackgroundSelector onSelect={() => {}} selectedBackground="" />);
    expect(getByAltText('Lake')).toBeInTheDocument();
    expect(getByAltText('Sea')).toBeInTheDocument();
    expect(getByAltText('Ocean')).toBeInTheDocument();
  });

  test('calls onSelect when an image is clicked', () => {
    const onSelectMock = jest.fn();
    const { getByAltText } = render(<BackgroundSelector onSelect={onSelectMock} selectedBackground="" />);
    
    fireEvent.click(getByAltText('Sea'));
    expect(onSelectMock).toHaveBeenCalledWith('./assets/Sea.jpg');
  });

  test('applies correct border style to the selected image', () => {
    const { getByAltText } = render(<BackgroundSelector onSelect={() => {}} selectedBackground="./assets/Lake.jpg" />);
    const selectedImage = getByAltText('Lake');
    expect(selectedImage).toHaveStyle('border: 2px solid #3498db');
  });
});
