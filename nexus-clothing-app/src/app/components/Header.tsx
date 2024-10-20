'use client'

import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { MobileMenuToggle } from './MobileMenuToggle';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { ThemeContextType } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const NavBar: React.FC = () => {
  const { theme } = useTheme() as ThemeContextType;

  return (
    <nav className="py-4 px-6 md:px-16 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-bold">NEXUS</h1>
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          <Link href="/women-products" className="transition-all duration-300">Women</Link>
          <Link href="/men-products" className="transition-all duration-300">Men</Link>
          <Link href="/accessories" className="transition-all duration-300">Accessories</Link>
          <Link href="/new-arrivals" className="transition-all duration-300">New Arrivals</Link>
          <Link href="/sales" className="transition-all duration-300">Sales</Link>
        </div>

        {/* Searchbar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="block md:hidden">
          <MagnifyingGlassIcon className="w-5 h-5"></MagnifyingGlassIcon>
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