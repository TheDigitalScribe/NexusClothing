'use client'

import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { MobileMenuToggle } from './MobileMenuToggle';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { ThemeContextType } from '../types';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/16/solid';

const NavBar: React.FC = () => {
  const { theme } = useTheme() as ThemeContextType;

  return (
    <nav className="py-4 px-6 md:px-12 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-lg md:text-xl font-bold transition-colors duration-200">NEXUS</h1>
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex space-x-8 items-center justify-center flex-grow text-lg">
          <Link href="/women-products" className="transition-colors duration-200">Women</Link>
          <Link href="/men-products" className="transition-colors duration-200">Men</Link>
          <Link href="/accessories" className="transition-colors duration-200">Accessories</Link>
          <Link href="/new-arrivals" className="transition-colors duration-200">New Arrivals</Link>
          <Link href="/sales" className="transition-colors duration-200">Sales</Link>
        </div>

        {/* Searchbar,  */}
        <div className="hidden md:flex items-center">
          <div>
            <SearchBar />
          </div>
          <div className="ml-4 space-x-4">
            <button>
              <ShoppingCartIcon className="w-6 h-6 transition-colors duration-200" />
            </button>
            <button>
              <UserIcon className="w-6 h-6 transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="flex md:hidden space-x-4">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <MobileMenuToggle />
        </div>
      </div>
    </nav >
  )
}

export default NavBar;