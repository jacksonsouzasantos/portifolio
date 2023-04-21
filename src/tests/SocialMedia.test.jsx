import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialMedia from '../componentes/SocialMedia';

describe('SocialMedia component', () => {
  test('renders all social media icons', () => {
    render(<SocialMedia />);
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('whatsapp-icon')).toBeInTheDocument();
  });
});
