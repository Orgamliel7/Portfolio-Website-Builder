import React from 'react';
import { render } from '@testing-library/react';
import PortfolioItem from './PortfolioItem';

describe('PortfolioItem', () => {
  const mockData = {
    title: 'Project Title',
    description: 'Project Description',
    imageUrl: './assets/project.jpg',
    projectUrl: 'https://example.com'
  };

  test('renders project title', () => {
    const { getByText } = render(<PortfolioItem {...mockData} />);
    expect(getByText('Project Title')).toBeInTheDocument();
  });

  test('renders project description', () => {
    const { getByText } = render(<PortfolioItem {...mockData} />);
    expect(getByText('Project Description')).toBeInTheDocument();
  });

  test('renders project image with correct src', () => {
    const { getByAltText } = render(<PortfolioItem {...mockData} />);
    const image = getByAltText('Project Title');
    expect(image).toHaveAttribute('src', './assets/project.jpg');
  });

  test('renders project link with correct href', () => {
    const { getByText } = render(<PortfolioItem {...mockData} />);
    const link = getByText('View Project');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
