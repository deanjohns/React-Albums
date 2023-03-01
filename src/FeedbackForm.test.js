import React from 'react';
import userEvent from '@testing-library/user-event';
import FeedbackForm from './Components/FeedbackForm';
import { render, screen } from '@testing-library/react';

test('enable submit button when the feedback is entered', () => {
  render(<FeedbackForm />);

  const feedback = screen.queryByTestId('feedback');
  const button = screen.queryByTestId('submitButton');

  expect(button).toBeDisabled();

  userEvent.type(feedback, 'Test Feedback');

  expect(button).toBeEnabled();
});

test('cant submit the form without filling the feedback field', () => {
  const onSubmit = jest.fn();

  render(<FeedbackForm handleSubmit={onSubmit} />);

  const button = screen.queryByTestId('submitButton');

  userEvent.click(button);

  expect(onSubmit).toHaveBeenCalledTimes(0);
});

test('submit the form successfully', () => {
  const onSubmit = jest.fn();

  render(<FeedbackForm handleSubmit={onSubmit} />);

  const feedback = screen.queryByTestId('feedback');
  const button = screen.queryByTestId('submitButton');

  userEvent.type(feedback, 'Test Feedback');
  userEvent.click(button);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
