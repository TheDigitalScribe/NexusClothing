import { render, screen } from '@testing-library/react';
import { BrandHighlight } from './BrandHighlight';

// Mock icon component
const MockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div data-testid="brand-highlight-icon" className={className} />
);

// Mock props
const mockProps = {
  Icon: MockIcon,
  title: "Free Shipping",
  subtext: "On orders over $50"
};

describe('BrandHighlight', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<BrandHighlight {...mockProps} />);
    });

    it('matches snapshot', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Content', () => {
    beforeEach(() => {
      render(<BrandHighlight {...mockProps} />);
    });

    it('renders the icon', () => {
      expect(screen.getByTestId('brand-highlight-icon')).toBeInTheDocument();
    });

    it('renders the title', () => {
      expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    });

    it('renders the subtext', () => {
      expect(screen.getByText(mockProps.subtext)).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies correct classes to container', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const containerDiv = container.firstChild as HTMLElement;
      expect(containerDiv).toHaveClass('flex', 'flex-col', 'items-center', 'w-60');
    });

    it('applies correct classes to icon', () => {
      render(<BrandHighlight {...mockProps} />);
      const icon = screen.getByTestId('brand-highlight-icon');
      expect(icon).toHaveClass('w-12', 'h-12', 'text-blue-500');
    });

    it('applies correct classes to title', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const title = container.querySelector('h3');
      expect(title).toHaveClass('text-lg', 'sm:text-lg', 'lg:text-xl', 'font-bold', 'mt-2');
    });

    it('applies correct classes to subtext', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const subtext = container.querySelector('p');
      expect(subtext).toHaveClass('leading-relaxed', 'mt-2');
    });
  });

  describe('Accessibility', () => {
    it('has correct heading level', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const heading = container.querySelector('h3');
      expect(heading).toBeInTheDocument();
    });

    it('maintains proper content hierarchy', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const elements = container.firstChild?.childNodes;
      expect(elements?.[0]).toHaveClass('w-12'); // Icon
      expect(elements?.[1].textContent).toBe(mockProps.title); // Title
      expect(elements?.[2].textContent).toBe(mockProps.subtext); // Subtext
    });
  });

  describe('Props Handling', () => {
    it('handles different icon components', () => {
      const NewIcon = () => <svg data-testid="different-icon" />;
      render(<BrandHighlight {...mockProps} Icon={NewIcon} />);
      expect(screen.getByTestId('different-icon')).toBeInTheDocument();
    });

    it('handles long title text', () => {
      const longTitle = "This is a very long title that might break the layout";
      render(<BrandHighlight {...mockProps} title={longTitle} />);
      expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('handles long subtext', () => {
      const longSubtext = "This is a very long subtext that might potentially break the layout of the component if not handled properly";
      render(<BrandHighlight {...mockProps} subtext={longSubtext} />);
      expect(screen.getByText(longSubtext)).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('maintains vertical spacing between elements', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      const title = container.querySelector('h3');
      const subtext = container.querySelector('p');

      expect(title).toHaveClass('mt-2');
      expect(subtext).toHaveClass('mt-2');
    });

    it('centers content horizontally', () => {
      const { container } = render(<BrandHighlight {...mockProps} />);
      expect(container.firstChild).toHaveClass('items-center');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty strings', () => {
      render(<BrandHighlight {...mockProps} title="" subtext="" />);
      const container = screen.getByTestId('brand-highlight-icon').closest('div');
      expect(container).toBeVisible();
    });

    it('handles undefined props with default values', () => {
      // @ts-ignore - Testing invalid props
      render(<BrandHighlight Icon={MockIcon} />);
      expect(screen.getByTestId('brand-highlight-icon')).toBeInTheDocument();
    });
  });
});
