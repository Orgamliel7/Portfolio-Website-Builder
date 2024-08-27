import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioForm from './PortfolioForm';

describe('PortfolioForm', () => {
  test('submits form data correctly', () => {
    const mockSubmit = jest.fn();
    render(<PortfolioForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Description (Optional)'), { target: { value: 'Web Developer' } });
    fireEvent.click(screen.getByText('Create Portfolio'));
    
    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
      name: 'John Doe',
      description: 'Web Developer'
    }));
  });

  test('displays file name when image is selected', () => {
    render(<PortfolioForm onSubmit={() => {}} />);
    
    const file = new File(['(⌐□_□)'], 'profile.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText(/Drag & drop your profile picture here or click to browse/i);
    
    Object.defineProperty(fileInput, 'files', {
      value: [file]
    });
    
    fireEvent.change(fileInput);
    
    expect(screen.getByText('profile.png')).toBeInTheDocument();
  });
});