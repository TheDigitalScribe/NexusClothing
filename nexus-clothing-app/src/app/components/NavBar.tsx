'use client'

import Link from 'next/link';
import { MobileMenuToggle } from './MobileMenuToggle';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { ThemeContextType } from '../types';

const NavBar: React.FC = () => {
  const { theme } = useTheme() as ThemeContextType;

  return (
    <nav className="py-4 px-6 md:px-16 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <h1 className="text-lg md:text-xl font-bold transition-all duration-500">NEXUS CLOTHING</h1>
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          <Link href="/" className="transition-all duration-500">HOME</Link>
          <Link href="/about" className="transition-all duration-500">ABOUT</Link>
          <Link href="/products" className="transition-all duration-500">PRODUCTS</Link>
        </div>

        {/* Hamburger Menu */}
        <div>
          <MobileMenuToggle />
        </div>

        {/* Light/dark theme toggle */}
        <div className="hidden md:flex">
          <ThemeToggle />
        </div>
      </div>
    </nav >
  )
}

export default NavBar;