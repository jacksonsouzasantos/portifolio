import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../componentes/NavBar';

describe('NavBar', () => {
  test('should display menu when hamburger icon is clicked', () => {
    const { getByTestId, getByLabelText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const hamburgerIcon = getByLabelText('Abrir menu');
    fireEvent.click(hamburgerIcon);
    const menu = getByTestId('nav-menu');
    expect(menu).toHaveClass('show-menu');
  });

  test('should hide menu when link is clicked', () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const hamburgerIcon = getByLabelText('Abrir menu');
    fireEvent.click(hamburgerIcon);
    const menu = getByTestId('nav-menu');
    expect(menu).toHaveClass('show-menu');
    const link = getByText('Home');
    fireEvent.click(link);
    expect(menu).not.toHaveClass('menu-open');
  });
});
