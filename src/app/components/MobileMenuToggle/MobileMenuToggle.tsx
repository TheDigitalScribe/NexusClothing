'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Bars3Icon } from '@heroicons/react/16/solid';

export const MobileMenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <div className="md:hidden mt-2">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle mobile menu">
        <Bars3Icon className="w-6 h-6"></Bars3Icon>
      </button>

      {isMenuOpen && (
        <div data-testid="mobile-menu" className={`absolute top-14 left-0 right-0 shadow-md mobile-menu-transition z-[9999] ${theme == "dark" ? "dark-theme" : "light-theme"}`}>
          <hr className={`${theme == "dark" ? "dark-theme" : "light-theme"}`}></hr>
          <Link href="/women-products" className="block py-2 px-4 text-sm">Women</Link>
          <Link href="/men-products" className="block py-2 px-4 text-sm">Men</Link>
          <Link href="/accessories" className="block py-2 px-4 text-sm">Accessories</Link>
          <Link href="/sales" className="block py-2 px-4 text-sm">Sales</Link>
          <br></br>
          <Link href="/cart" className="block py-2 px-4 text-sm">My Cart</Link>
          <Link href="/account" className="block py-2 px-4 text-sm">My Account</Link>
          <div className="py-2 px-4 flex space-x-2">
            <span className="text-sm">Theme: </span>
          </div>
        </div>
      )
      }
    </div >
  )
}