import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/For Azure deployment test only/i);
  expect(linkElement).toBeInTheDocument();
});
