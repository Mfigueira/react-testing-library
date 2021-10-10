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
  expect(btn).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<ColorButton />);

  const btn = screen.getByRole('button');
  expect(btn).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables/enables button', () => {
  render(<ColorButton />);

  const btn = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(btn).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(btn).toBeEnabled();
});

test('button turns gray when its disabled, and back to original colors when enabled', () => {
  render(<ColorButton />);

  const btn = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(btn);
  expect(btn).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'blue' });
});
