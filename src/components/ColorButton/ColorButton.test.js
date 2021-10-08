import { render, screen, fireEvent } from '@testing-library/react';
import ColorButton from './ColorButton';

test('button has correct initial color and text', () => {
  render(<ColorButton />);
  // with this we are actually testing the initial text of the button
  const btn = screen.getByRole('button', { name: /change to blue/i });
  // and for the color:
  expect(btn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<ColorButton />);
  const btn = screen.getByRole('button');
  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: 'blue' });
  expect(btn.textContent).toBe('Change to red');
});
