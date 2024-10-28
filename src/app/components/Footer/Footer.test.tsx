import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Footer', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Footer />);
    });

    it('matches snapshot', () => {
      const { container } = render(<Footer />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Content', () => {
    beforeEach(() => {
      render(<Footer />);
    });

    it('renders "About Us" link', () => {
      const aboutLink = screen.getByText('About Us');
      expect(aboutLink).toBeInTheDocument();
      expect(aboutLink.closest('a')).toHaveAttribute('href', '/about-us');
    });

    it('renders "Contact Us" link', () => {
      const contactLink = screen.getByText('Contact Us');
      expect(contactLink).toBeInTheDocument();
      expect(contactLink.closest('a')).toHaveAttribute('href', '/contact=us');
    });

    it('renders copyright text with current year', () => {
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(`© ${currentYear} Nexus Clothing. All rights reserved.`);
      expect(copyright).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies correct classes to container', () => {
      const { container } = render(<Footer />);
      const outerDiv = container.firstChild as HTMLElement;
      expect(outerDiv).toHaveClass('py-2', 'px-4', 'sm:py-4', 'sm:px-8', 'flex');
    });

    it('applies correct classes to inner container', () => {
      const { container } = render(<Footer />);
      const innerDiv = container.querySelector('.container');
      expect(innerDiv).toHaveClass('container', 'mx-auto', 'items-center', 'space-y-4', 'text-center');
    });

    it('applies correct classes to headings', () => {
      const { container } = render(<Footer />);
      const headings = container.getElementsByTagName('h3');
      Array.from(headings).forEach(heading => {
        expect(heading).toHaveClass('text-base', 'sm:text-md', 'font-bold');
      });
    });

    it('applies correct classes to copyright text', () => {
      render(<Footer />);
      const copyright = screen.getByText(/© .* All rights reserved\./);
      expect(copyright).toHaveClass('text-sm', 'text-center');
    });
  });

  describe('Accessibility', () => {
    it('has correct heading elements', () => {
      const { container } = render(<Footer />);
      const headings = container.getElementsByTagName('h3');
      expect(headings.length).toBe(2);
    });

    it('has accessible links', () => {
      const { container } = render(<Footer />);
      const links = container.getElementsByTagName('a');
      expect(links.length).toBe(2);
      Array.from(links).forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Dynamic Content', () => {
    it('updates copyright year automatically', () => {
      const mockDate = new Date('2025-01-01');
      const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate as unknown as Date);

      render(<Footer />);
      expect(screen.getByText(/© 2025/)).toBeInTheDocument();

      spy.mockRestore();
    });
  });

  describe('Layout', () => {
    it('maintains correct spacing between elements', () => {
      const { container } = render(<Footer />);
      const aboutHeading = screen.getByText('About Us');
      expect(aboutHeading).toHaveClass('mb-4');
    });

    it('centers content horizontally', () => {
      const { container } = render(<Footer />);
      const innerContainer = container.querySelector('.container');
      expect(innerContainer).toHaveClass('mx-auto', 'text-center');
    });
  });

  describe('Edge Cases', () => {
    it('handles long text without breaking layout', () => {
      const mockDate = new Date(2024, 0, 1);
      jest.spyOn(global, 'Date')
        .mockImplementation(() => mockDate);

      const { container } = render(<Footer />);

      const copyright = screen.getByText(/© 2024/);
      expect(copyright).toBeVisible();
      expect(container.firstChild).toBeVisible();

      jest.restoreAllMocks();
    });

    it('handles very long company name', () => {
      const { container } = render(<Footer />);
      const copyright = container.querySelector('p');
      expect(copyright).toHaveClass('text-sm');
      expect(copyright).toBeVisible();
    });

    it('maintains layout with minimum content', () => {
      const { container } = render(<Footer />);
      expect(container.firstChild).toHaveClass('py-2', 'px-4');
    });
  });

});
