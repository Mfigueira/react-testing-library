import { separateCamelCaseWithSpaces } from './helpers';

describe('A unit function: separateCamelCaseWithSpaces', () => {
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
