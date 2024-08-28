import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PortfolioForm from './PortfolioForm';

describe('PortfolioForm', () => {
  test('submits form data correctly', () => {
    const mockSubmit = jest.fn();
    render(<PortfolioForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Or Gamliel' } });
    fireEvent.change(screen.getByPlaceholderText('Your Description (Optional)'), { target: { value: 'Web Developer' } });
    fireEvent.click(screen.getByText('Create Portfolio'));
    
    expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Or Gamliel',
      description: 'Web Developer'
    }));
  });

  test('displays image preview when an image is selected', () => {
    render(<PortfolioForm onSubmit={() => {}} />);
    
    const file = new File(['dummy content'], 'profile.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText(/Drag & drop your profile picture here or click to browse/i);
    
    Object.defineProperty(fileInput, 'files', {
      value: [file],
      writable: false,
    });
    
    fireEvent.change(fileInput);
    
    expect(screen.getByAltText('Profile Preview')).toBeInTheDocument();
  });
});
