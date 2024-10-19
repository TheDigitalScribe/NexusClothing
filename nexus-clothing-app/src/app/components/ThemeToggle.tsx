// components/ThemeToggle.tsx
'use client'

import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-12 h-6 rounded-full p-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
        }`}
    >
      <div
        className={`w-4 h-4 rounded-full transition-transform ${theme === 'dark' ? 'bg-white transform translate-x-6' : 'bg-gray-800'
          }`}
      />
    </button>
  );
};

export default ThemeToggle;
