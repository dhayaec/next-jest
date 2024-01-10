'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

type SignUpFormFields = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    formState,
  } = useForm<SignUpFormFields>();

  const onSubmit: SubmitHandler<SignUpFormFields> = (data) => {
    console.log(data);
  };

  const password = watch('password', ''); // Watch the 'password' field

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      return 'Passwords do not match';
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 data-testid="signUp">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
            data-testid="fullNameLabel"
          >
            Full Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.fullName ? 'border-red-500' : ''
            }`}
            type="text"
            id="fullName"
            data-testid="fullName"
            {...register('fullName', { required: 'Full Name is required' })}
          />
          {errors.fullName && (
            <p
              data-testid="fullNameError"
              className="text-red-500 text-xs italic"
            >
              {errors.fullName.message as any}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
            data-testid="emailLabel"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
            type="email"
            id="email"
            data-testid="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p data-testid="emailError" className="text-red-500 text-xs italic">
              {errors.email.message as any}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
            data-testid="passwordLabel"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? 'border-red-500' : ''
            }`}
            type="password"
            id="password"
            data-testid="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
          />
          {errors.password && (
            <p
              data-testid="passwordError"
              className="text-red-500 text-xs italic"
            >
              {errors.password.message as any}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
            data-testid="confirmPasswordLabel"
          >
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
            type="password"
            id="confirmPassword"
            data-testid="confirmPassword"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: validateConfirmPassword,
            })}
          />
          {errors.confirmPassword && (
            <p
              data-testid="confirmPasswordError"
              className="text-red-500 text-xs italic"
            >
              {errors.confirmPassword.message as any}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            data-testid="signUpButton"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
