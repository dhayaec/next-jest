import { fireEvent, render, waitFor } from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  test('renders SignUpForm correctly', () => {
    const { getByTestId } = render(<SignUpForm />);

    expect(getByTestId('signUp')).toBeInTheDocument();
    expect(getByTestId('fullNameLabel')).toBeInTheDocument();
    expect(getByTestId('emailLabel')).toBeInTheDocument();
    expect(getByTestId('passwordLabel')).toBeInTheDocument();
    expect(getByTestId('confirmPasswordLabel')).toBeInTheDocument();
    expect(getByTestId('signUpButton')).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const { getByTestId } = render(<SignUpForm />);

    fireEvent.change(getByTestId('fullName'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByTestId('email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(getByTestId('confirmPassword'), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByTestId('signUpButton'));

    await waitFor(() => {
      // You can add more assertions here if needed
      // For example, check if the console.log(data) statement in onSubmit was called
    });
  });

  test('displays error messages for invalid data', async () => {
    const { getByTestId } = render(<SignUpForm />);

    // Submit form without filling in any fields
    fireEvent.click(getByTestId('signUpButton'));

    // Wait for async validation or submission
    await waitFor(() => {
      expect(getByTestId('fullNameError')).toHaveTextContent(
        'Full Name is required'
      );
      expect(getByTestId('emailError')).toHaveTextContent('Email is required');
      expect(getByTestId('passwordError')).toHaveTextContent(
        'Password is required'
      );
      expect(getByTestId('confirmPasswordError')).toHaveTextContent(
        'Confirm Password is required'
      );
    });
  });

  test('validates confirm password', async () => {
    const { getByTestId } = render(<SignUpForm />);
    fireEvent.input(getByTestId('password'), {
      target: { value: 'password123' },
    });
    fireEvent.input(getByTestId('confirmPassword'), {
      target: { value: 'password456' },
    });
    fireEvent.click(getByTestId('signUpButton'));
    await waitFor(() => {
      expect(getByTestId('confirmPasswordError')).toBeInTheDocument();
    });
  });

  // Add more test cases for specific scenarios, edge cases, etc.
});
