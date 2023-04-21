import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentHome from '../componentes/ContentHome';

test('renders ContentHome component', () => {
  const { getByTestId } = render(<ContentHome />);
  const welcomeText = getByTestId('welcome-text');
  expect(welcomeText).toBeInTheDocument();
});
