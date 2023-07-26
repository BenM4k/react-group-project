import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../component/Header';

describe('Header', () => {
  test('check links in Navbar', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const links = ['rockets', 'missions', 'profile'];

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
