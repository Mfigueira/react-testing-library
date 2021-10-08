import { render, screen } from '@testing-library/react';
import ColorButton from './ColorButton';

test('button has correct initial color and text', () => {
  render(<ColorButton />);
  // with this we are actually testing the initial text of the button
  const btn = screen.getByRole('button', { name: /change to blue/i });
  // and for the color:
  expect(btn).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  //
});
