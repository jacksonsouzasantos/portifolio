import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../componentes/Footer';

describe('Footer', () => {
  test('renders footer component with text', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/JacksonSantos.Web.Develop ©2023/i);
    expect(footerElement).toBeInTheDocument();
  });
});