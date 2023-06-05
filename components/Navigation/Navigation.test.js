// tests/Navigation.test.js
import { render, screen } from '@testing-library/react';
import Navigation from './index.js';

test('renders Navigation component correctly', () => {
  render(
      <Navigation />
   );

  const spotlightLink = screen.getByRole('link', { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
  expect(spotlightLink).toHaveAttribute('href', '/');

  const artPiecesLink = screen.getByRole('link', { name: /art pieces/i });
  expect(artPiecesLink).toBeInTheDocument();
  expect(artPiecesLink).toHaveAttribute('href', '/art-pieces');
});
