import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BackgroundSelector from './BackgroundSelector';

describe('BackgroundSelector', () => {
  test('renders all background options', () => {
    const onSelect = jest.fn();
    render(<BackgroundSelector onSelect={onSelect} selectedBackground="" />);
    
    expect(screen.getByAltText('Lake')).toBeInTheDocument();
    expect(screen.getByAltText('Sea')).toBeInTheDocument();
    expect(screen.getByAltText('Ocean')).toBeInTheDocument();
  });

  test('calls onSelect with correct src when an image is clicked', () => {
    const onSelect = jest.fn();
    render(<BackgroundSelector onSelect={onSelect} selectedBackground="" />);
    
    fireEvent.click(screen.getByAltText('Lake'));
    expect(onSelect).toHaveBeenCalledWith('./assets/Lake.jpg');
  });

  test('selected image has correct border style', () => {
    const onSelect = jest.fn();
    render(<BackgroundSelector onSelect={onSelect} selectedBackground="./assets/Sea.jpg" />);
    
    expect(screen.getByAltText('Sea')).toHaveStyle('border: 2px solid #3498db');
    expect(screen.getByAltText('Lake')).toHaveStyle('border: 2px solid #3498db');
  });
});