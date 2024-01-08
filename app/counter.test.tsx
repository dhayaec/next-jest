/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './counter';

it('App Router: Works with Client Components (React State)', () => {
  render(<Counter />);
  expect(screen.getByRole('counter-value')).toHaveTextContent('0');
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('counter-value')).toHaveTextContent('1');
});
