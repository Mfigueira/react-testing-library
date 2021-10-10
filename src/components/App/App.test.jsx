import { render, screen } from '@testing-library/react';
import App from './App';
import { separateCamelCaseWithSpaces } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkEl = screen.getByText(/app/i);
  expect(linkEl).toBeInTheDocument();
});

describe('testing a unit function', () => {
  test('Works for no capital letters', () => {
    expect(separateCamelCaseWithSpaces('Red')).toBe('Red');
  });

  test('Works for 1 capital letters', () => {
    expect(separateCamelCaseWithSpaces('MidBlue')).toBe('Mid Blue');
  });

  test('Works for multi capital letters', () => {
    expect(separateCamelCaseWithSpaces('MidVioletRed')).toBe('Mid Violet Red');
  });
});
