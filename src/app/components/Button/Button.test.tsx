import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

const mockProps = {
  text: 'Test Text',
  ariaLabel: 'Test Aria Label',
}

describe('Button', () => {
  // Render test
  it('renders the component', () => {
    render(<Button {...mockProps} />);

    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  // Tailwind CSS classes test
  it('applies correct Tailwind CSS classes', () => {
    render(<Button {...mockProps} />);

    expect(screen.getByText(mockProps.text)).toHaveClass('rounded-full py-2 px-4 bg-blue-600 items-center text-white shadow-sm transition-colors duration-300');
  });

  // Correct aria-label test
  it('has correct aria-label', () => {
    render(<Button {...mockProps} />);

    const button = screen.getByRole('button', { name: mockProps.ariaLabel });
    expect(button).toHaveAttribute('aria-label', mockProps.ariaLabel);
  });

  // Responsive classes test
  it('has correct responsive classes', () => {
    render(<Button {...mockProps} />);

    expect(screen.getByText(mockProps.text)).toHaveClass('rounded-full py-2 px-4 bg-blue-600 items-center text-white shadow-sm transition-colors duration-300');
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(<Button {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});