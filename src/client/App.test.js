import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders PortfolioForm initially', () => {
    render(<App />);
    expect(screen.getByText('Create Portfolio')).toBeInTheDocument();
  });

  test('renders profile after form submission', async () => {
    render(<App />);
    
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Or Gamliel' } });
    fireEvent.click(screen.getByText('Create Portfolio'));
    
    expect(await screen.findByText('Or Gamliel')).toBeInTheDocument();
  });

  test('allows adding a new project', async () => {
    render(<App />);
    
    // Submit the initial form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'Or Gamliel' } });
    fireEvent.click(screen.getByText('Create Portfolio'));
    
    // Wait for the profile to render
    await screen.findByText('Or Gamliel');
    
    // Click to add a new project
    fireEvent.click(screen.getByText('Add Project'));
    
    // Fill in project details
    fireEvent.change(screen.getByPlaceholderText('Project Title'), { target: { value: 'My Awesome Project' } });
    fireEvent.change(screen.getByPlaceholderText('Project Description'), { target: { value: 'A cool project' } });
    fireEvent.click(screen.getByText('Add Project'));
    
    // Check if the new project is displayed
    expect(await screen.findByText('My Awesome Project')).toBeInTheDocument();
  });
});