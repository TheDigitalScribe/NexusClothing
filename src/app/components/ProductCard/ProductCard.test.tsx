import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { useTheme } from '../ThemeContext';
import { StaticImageData } from 'next/image';
import '@testing-library/jest-dom';

jest.mock('../ThemeContext', () => ({
  useTheme: jest.fn()
}));

jest.mock('../Button/Button', () => ({
  Button: ({ text, ariaLabel }: { text: string; ariaLabel: string }) => (
    <button aria-label={ariaLabel}>{text}</button>
  )
}));

jest.mock('@heroicons/react/16/solid', () => ({
  StarIcon: function MockStarIcon() {
    return <span data-testid="star-icon">★</span>;
  }
}));

// Mock next/image using a function
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({ src, alt, sizes, className }: any) {
    return (
      <img
        src={typeof src === 'string' ? src : src.src}
        alt={alt}
        sizes={sizes}
        className={className}
        data-testid="next-image"
      />
    );
  }
}));

describe('ProductCard Component', () => {
  const mockImageData: StaticImageData = {
    src: '/test-image.jpg',
    height: 400,
    width: 400,
    blurDataURL: 'data:image/jpeg;base64,fake',
    blurWidth: 8,
    blurHeight: 8,
  };

  const mockProps = {
    image: mockImageData,
    title: 'Test Product',
    description: 'Test Description',
    price: '$99.99',
    reviewAverage: '4.5',
    reviewAmount: '(123)',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with light theme correctly', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light' });

    const { container } = render(<ProductCard {...mockProps} />);

    expect(screen.getByTestId('next-image')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('(123)')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View Product Button' })).toBeInTheDocument();

    const card = container.querySelector('.card');
    expect(card).toHaveClass('light-theme');
    expect(card).not.toHaveClass('dark-theme');
  });

  it('renders with dark theme correctly', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'dark' });

    const { container } = render(<ProductCard {...mockProps} />);

    const card = container.querySelector('.card');
    expect(card).toHaveClass('dark-theme');
    expect(card).not.toHaveClass('light-theme');
  });

  it('renders the image with correct props', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light' });

    render(<ProductCard {...mockProps} />);

    const image = screen.getByTestId('next-image');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
    expect(image).toHaveAttribute('alt', 'Test Product Image');
  });

  it('renders the star icon', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light' });

    render(<ProductCard {...mockProps} />);

    const starIcon = screen.getByTestId('star-icon');
    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveTextContent('★');
  });

  it('handles missing review data gracefully', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light' });

    const propsWithoutReviews = {
      ...mockProps,
      reviewAverage: undefined,
      reviewAmount: undefined,
    };

    render(<ProductCard {...propsWithoutReviews} />);

    expect(screen.queryByText('4.5')).not.toBeInTheDocument();
    expect(screen.queryByText('(123)')).not.toBeInTheDocument();
  });
});
