'use client';

import React from 'react'
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { ThemeContextType } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { theme } = useTheme() as ThemeContextType;

  return (
    <form className="flex items-center">
      <div className="relative">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className={`px-4 py-1 w-40 text-sm md:text-base border rounded-full focus:outline-blue-400 searchbar-transition ${theme == "dark" ? "dark-theme bg-gray-300 input-dark" : "light-theme bg-gray-700 border-gray-700 input-light"}`}></input>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
      </div>
    </form>
  )
}
