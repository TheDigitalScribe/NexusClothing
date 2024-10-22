'use client'

import React from 'react';
import { useTheme } from './ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { ThemeContextType } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme() as ThemeContextType;

  return (
    <button onClick={toggleTheme} className={`w-12 h-6 rounded-full p-0.5 flex items-center ${theme === 'dark' ? 'bg-gray-700 justify-end' : 'bg-gray-300 justify-start'}`} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}>

        {/* Change icon based on theme */}
        {theme === 'dark' ? (
          <MoonIcon className="w-4 h-4 text-black transition duration-500" />
        ) : (
          <SunIcon className="w-4 h-4 text-yellow-300 transition duration-500" />
        )}

      </div>
    </button>
  );
};