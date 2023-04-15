import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentHome from './ContentHome';

test('renders ContentHome component', () => {
  const { getByTestId } = render(<ContentHome />);
  const welcomeText = getByTestId('welcome-text');
  expect(welcomeText).toBeInTheDocument();
});
