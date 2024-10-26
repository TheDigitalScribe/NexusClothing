import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrandHighlight } from '@/app/components/BrandHighlight/BrandHighlight';
import { FiStar, FiHome } from 'react-icons/fi';

const mockProps = {
  Icon: FiStar,
  title: 'Test Title',
  subtext: 'Test Subtext',
}

const mockPropsLongText = {
  Icon: FiStar,
  title: 'This is a very long title that might wrap',
  subtext: 'This is a very long subtext that might wrap to multiple lines and should still look good',
}

describe('BrandHighlight', () => {
  // Render test
  it('renders the component', () => {
    render(<BrandHighlight {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtext)).toBeInTheDocument();
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  // Tailwind CSS classes test
  it('applies correct Tailwind CSS classes', () => {
    render(<BrandHighlight {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toHaveClass('text-lg sm:text-lg lg:text-xl font-bold mt-2');
    expect(screen.getByText(mockProps.subtext)).toHaveClass('leading-relaxed mt-2');
    expect(document.querySelector('svg')).toHaveClass('w-12 h-12 text-blue-500');
  });

  // Different icons test
  it('works with different icons', () => {
    render(<BrandHighlight {...mockProps} Icon={FiStar} />);

    expect(document.querySelector('svg')).toBeInTheDocument();

    render(<BrandHighlight {...mockProps} Icon={FiHome} />);

    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  // Long content test
  it('handles long text content', () => {
    render(<BrandHighlight {...mockPropsLongText} />);

    expect(screen.getByText(mockPropsLongText.title)).toBeInTheDocument();
    expect(screen.getByText(mockPropsLongText.subtext)).toBeInTheDocument();
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(<BrandHighlight {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});

