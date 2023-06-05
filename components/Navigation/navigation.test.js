// tests/Navigation.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders Navigation component correctly', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );

  const spotlightLink = screen.getByRole('link', { name: /spotlight/i });
  expect(spotlightLink).toBeInTheDocument();
  expect(spotlightLink).toHaveAttribute('href', '/');

  const artPiecesLink = screen.getByRole('link', { name: /art pieces/i });
  expect(artPiecesLink).toBeInTheDocument();
  expect(artPiecesLink).toHaveAttribute('href', '/art-pieces');
});
