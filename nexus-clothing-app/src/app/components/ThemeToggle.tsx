// components/ThemeToggle.tsx
'use client'

import React from 'react';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-12 h-6 rounded-full p-0.5 flex items-center ${theme === 'dark' ? 'bg-gray-700 justify-end' : 'bg-gray-300 justify-start'
        }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'
          }`}
      >
        <FontAwesomeIcon
          icon={theme === 'dark' ? faMoon : faSun}
          className={`w-3 h-3 ${theme === 'dark' ? 'text-gray-800' : 'text-yellow-400'
            }`}
        />
      </div>
    </button>
  );
};


export default ThemeToggle;
