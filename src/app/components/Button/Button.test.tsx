import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

const mockProps = {
  text: 'Click me',
  ariaLabel: 'Test button',
  onClick: jest.fn()
};

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with the correct text', () => {
      render(<Button {...mockProps} />);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('matches snapshot', () => {
      const { container } = render(<Button {...mockProps} />);
      expect(container).toMatchSnapshot();
    });
  });

  it('renders with empty text when text prop is empty', () => {
    render(<Button {...mockProps} text="" />);
    expect(screen.getByRole('button')).toHaveTextContent('');
  });
});

describe('Accessibility', () => {
  it('has the correct aria-label', () => {
    render(<Button {...mockProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test button');
  });

  it('is keyboard accessible', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<Button {...mockProps} onClick={onClickMock} />);
    const button = screen.getByRole('button');

    await user.tab();
    expect(button).toHaveFocus();
  });
});

describe('Styling', () => {
  it('has the correct default classes', () => {
    render(<Button {...mockProps} />);
    expect(screen.getByRole('button')).toHaveClass(
      'rounded-full',
      'py-2',
      'px-4',
      'bg-blue-600',
      'items-center',
      'text-white',
      'shadow-sm',
      'transition-colors',
      'duration-300'
    );
  });
});

describe('Interactions', () => {
  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<Button {...mockProps} onClick={onClickMock} />);

    await user.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('can be clicked multiple times', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<Button {...mockProps} onClick={onClickMock} />);

    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
