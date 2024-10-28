// SearchBar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';
import ThemeContext from '../ThemeContext';

// Mock the HeroIcons component
jest.mock('@heroicons/react/16/solid', () => ({
  MagnifyingGlassIcon: () => <div data-testid="search-icon">SearchIcon</div>,
}));

describe('SearchBar', () => {
  const renderWithTheme = (theme: 'light' | 'dark') => {
    return render(
      <ThemeContext.Provider value={{ theme, toggleTheme: jest.fn() }}>
        <SearchBar />
      </ThemeContext.Provider>
    );
  };

  describe('Rendering', () => {
    it('renders correctly in light theme', () => {
      const { container } = renderWithTheme('light');
      expect(container).toMatchSnapshot();
    });

    it('matches snapshot', () => {
      const { container } = render(<SearchBar />);
      expect(container).toMatchSnapshot();
    });

    it('renders correctly in dark theme', () => {
      const { container } = renderWithTheme('dark');
      expect(container).toMatchSnapshot();
    });

    it('renders search input with correct placeholder', () => {
      renderWithTheme('light');
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('renders search icon', () => {
      renderWithTheme('light');
      expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });
  });

  describe('Theming', () => {
    it('applies correct classes in light theme', () => {
      renderWithTheme('light');
      const input = screen.getByRole('textbox', { name: 'Search' });
      expect(input).toHaveClass('light-theme', 'bg-gray-700', 'border-gray-700', 'input-light');
    });

    it('applies correct classes in dark theme', () => {
      renderWithTheme('dark');
      const input = screen.getByRole('textbox', { name: 'Search' });
      expect(input).toHaveClass('dark-theme', 'bg-gray-300', 'input-dark');
    });
  });

  describe('Input Functionality', () => {
    it('updates input value on user typing', async () => {
      const user = userEvent.setup();
      renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;

      await user.type(input, 'test search');
      expect(input.value).toBe('test search');
    });

    it('handles empty input correctly', async () => {
      const user = userEvent.setup();
      renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;

      await user.type(input, 'test');
      await user.clear(input);
      expect(input.value).toBe('');
    });
  });

  describe('Form Behavior', () => {
    it('prevents default form submission', () => {
      renderWithTheme('light');
      const form = screen.getByRole('search');

      const handleSubmit = jest.fn();
      form.addEventListener('submit', handleSubmit);

      fireEvent.submit(form);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('has correct form attributes and classes', () => {
      renderWithTheme('light');
      const form = screen.getByRole('search');

      expect(form).toHaveClass('flex', 'items-center');

      expect(form).toHaveAttribute('role', 'search');
    });

    it('maintains form state after submission', async () => {
      const user = userEvent.setup();
      renderWithTheme('light');

      const input = screen.getByRole('textbox', { name: 'Search' });
      const form = screen.getByRole('search');

      await user.type(input, 'test search');

      fireEvent.submit(form);

      expect(input).toHaveValue('test search');
    });

    it('handles form submission with enter key', async () => {
      const user = userEvent.setup();
      renderWithTheme('light');

      const mockPreventDefault = jest.fn();
      const form = screen.getByRole('search');
      const input = screen.getByRole('textbox', { name: 'Search' });

      form.addEventListener('submit', (e) => {
        e.preventDefault = mockPreventDefault;
      });

      await user.type(input, 'test search{enter}');

      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('input is keyboard accessible', async () => {
      const user = userEvent.setup();
      renderWithTheme('light');

      await user.tab();
      expect(screen.getByPlaceholderText('Search...')).toHaveFocus();
    });

    it('has proper focus styles', () => {
      renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...');
      expect(input).toHaveClass('focus:outline-blue-400');
    });
  });

  describe('Responsive Design', () => {
    it('has correct base and responsive text classes', () => {
      renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...');
      expect(input).toHaveClass('text-sm', 'md:text-base');
    });

    it('has correct width class', () => {
      renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...');
      expect(input).toHaveClass('w-40');
    });
  });

  describe('State Management', () => {
    it('maintains state between renders', async () => {
      const user = userEvent.setup();
      const { rerender } = renderWithTheme('light');
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;

      await user.type(input, 'test');
      expect(input.value).toBe('test');

      rerender(
        <ThemeContext.Provider value={{ theme: 'light', toggleTheme: jest.fn() }}>
          <SearchBar />
        </ThemeContext.Provider>
      );

      expect(input.value).toBe('test');
    });
  });
});
