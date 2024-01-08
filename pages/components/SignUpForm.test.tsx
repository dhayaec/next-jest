import { render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  test('renders', async () => {
    render(<SignUpForm />);
    expect(await screen.findByTestId('signUp')).toHaveTextContent('Sign Up');
  });
});
