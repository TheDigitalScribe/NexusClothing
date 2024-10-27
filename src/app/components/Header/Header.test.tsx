import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Header } from './Header';

// Mock the search bar
jest.mock('../SearchBar', () => ({
  SearchBar: () => <div data-testid="search-bar">Search Bar</div>,
}));

// Mock the mobile menu toggle
jest.mock('../MobileMenuToggle/MobileMenuToggle', () => ({
  MobileMenuToggle: () => <div data-testid="mobile-menu-toggle">Mobile Menu Toggle</div>,
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock heroicons
jest.mock('@heroicons/react/16/solid', () => ({
  MagnifyingGlassIcon: () => <svg data-testid="magnifying-glass-icon" />,
  UserIcon: () => <svg data-testid="user-icon" />,
  ShoppingCartIcon: () => <svg data-testid="shopping-cart-icon" />,
}));

// Render test
describe('Header', () => {
  describe('Rendering', () => {
    it('renders the logo', () => {
      render(<Header />);
      expect(screen.getByText('NEXUS')).toBeInTheDocument();
    });

    // Render navigation links test
    it('renders all navigation links', () => {
      render(<Header />);
      const links = ['Women', 'Men', 'Accessories', 'New Arrivals', 'Sales'];
      links.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });

    // Render search bar test
    it('renders the search bar in desktop view', () => {
      render(<Header />);
      expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    });

    // Render buttons test
    it('renders shopping cart and account buttons', () => {
      render(<Header />);
      expect(screen.getByLabelText('Shopping Cart Button')).toBeInTheDocument();
      expect(screen.getByLabelText('Account Button')).toBeInTheDocument();
    });
  });

  // Navigation tests
  describe('Navigation', () => {
    it('has correct href attributes for all links', () => {
      render(<Header />);
      const linkMappings = {
        'Women': '/women-products',
        'Men': '/men-products',
        'Accessories': '/accessories',
        'New Arrivals': '/new-arrivals',
        'Sales': '/sales'
      };
      Object.entries(linkMappings).forEach(([text, href]) => {
        const link = screen.getByText(text);
        expect(link).toHaveAttribute('href', href);
      });
    });

    // Logo link test
    it('logo links to home page', () => {
      render(<Header />);
      const logoLink = screen.getByText('NEXUS').closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });

  // Responsive design tests
  describe('Responsive Design', () => {
    it('renders mobile menu toggle on mobile view', () => {
      render(<Header />);
      expect(screen.getByTestId('mobile-menu-toggle')).toBeInTheDocument();
    });

    // Search icon test
    it('renders search icon on mobile view', () => {
      render(<Header />);
      expect(screen.getByTestId('magnifying-glass-icon')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has accessible buttons with proper aria-labels', () => {
      render(<Header />);
      expect(screen.getByLabelText('Shopping Cart Button')).toBeInTheDocument();
      expect(screen.getByLabelText('Account Button')).toBeInTheDocument();
    });
  });

  // Interactive tests
  describe('Interactive Elements', () => {
    it('shopping cart button is clickable', async () => {
      const user = userEvent.setup();
      render(<Header />);
      const cartButton = screen.getByLabelText('Shopping Cart Button');
      await user.click(cartButton);
    });

    // Account button test
    it('account button is clickable', async () => {
      const user = userEvent.setup();
      render(<Header />);
      const accountButton = screen.getByLabelText('Account Button');
      await user.click(accountButton);
    });

    // Snapshot test
    it('matches snapshot', () => {
      const { container } = render(<Header />);

      expect(container).toMatchSnapshot();
    });
  });
});
