import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App text', () => {
  render(<App />);
  const linkEl = screen.getByText(/app/i);
  expect(linkEl).toBeInTheDocument();
});
