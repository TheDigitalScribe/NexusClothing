'use client'

import Link from 'next/link';
import { SearchBar } from '../SearchBar';
import { MobileMenuToggle } from '../MobileMenuToggle/MobileMenuToggle';
import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/16/solid';
import { ThemeToggle } from '../ThemeToggle';

export const Header: React.FC = () => {

  return (
    <nav className="py-3 sm:py-4 px-4 sm:px-6 lg:px-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-200">NEXUS</h1>
          </Link>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className="hidden md:flex space-x-8 items-center justify-center flex-grow">
          <Link href="/women-products" className="text-sm lg:text-lg transition-colors duration-200">Women</Link>
          <Link href="/men-products" className="text-sm lg:text-lg transition-colors duration-200">Men</Link>
          <Link href="/accessories" className="text-sm lg:text-lg transition-colors duration-200">Accessories</Link>
          <Link href="/new-arrivals" className="text-sm lg:text-lg transition-colors duration-200">New Arrivals</Link>
          <Link href="/sales" className="text-sm lg:text-lg transition-colors duration-200">Sales</Link>
        </div>

        {/* Searchbar, Shopping Cart and Account */}
        <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
          <div className="w-32 sm:w-40 lg:w-48">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button aria-label="Shopping Cart Button">
              <ShoppingCartIcon className="w-6 h-6 transition-colors duration-200" />
            </button>
            <button aria-label="Account Button">
              <UserIcon className="w-6 h-6 transition-colors duration-200" />
            </button>
          </div>
          <div>
            <ThemeToggle />
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