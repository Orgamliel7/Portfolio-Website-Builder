import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('displays BackgroundSelector when no userData is present', () => {
    const { getByAltText } = render(<App />);
    expect(getByAltText('Lake')).toBeInTheDocument();
  });

});
