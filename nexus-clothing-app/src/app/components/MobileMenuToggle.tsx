'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { ThemeContextType } from '../types';

export const MobileMenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme() as ThemeContextType;

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-all duration-[var(--transition-duration)] focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle mobile menu">
        <Bars3Icon className={`w-6 h-6 ${theme == "dark" ? "text-white" : "text-black"}`}></Bars3Icon>
      </button>

      {isMenuOpen && (
        <div className={`absolute top-14 left-0 right-0 shadow-md mobile-menu-transition z-[9999] ${theme == "dark" ? "dark-theme" : "light-theme"}`}>
          <Link href="/" className="block py-2 px-4 text-sm">HOME</Link>
          <Link href="/about" className="block py-2 px-4 text-sm">ABOUT</Link>
          <Link href="/products" className="block py-2 px-4 text-sm">PRODUCTS</Link>
          <div className="py-2 px-4 flex space-x-2">
            <span className="text-sm">Theme: </span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  )
}