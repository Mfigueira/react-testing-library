import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('The summary form', () => {
  test('checkbox is unchecked by default', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test('checking checkbox enables button', () => {
    render(<SummaryForm />);
    const btn = screen.getByRole('button', { name: /confirm order/i });
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    userEvent.click(checkbox);
    expect(btn).toBeEnabled();
  });

  test('Unchecking checkbox again disables button', () => {
    render(<SummaryForm />);
    const btn = screen.getByRole('button', { name: /confirm order/i });
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    userEvent.click(checkbox);
    userEvent.click(checkbox);
    expect(btn).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
