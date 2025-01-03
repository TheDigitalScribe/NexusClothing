'use client';

import { useState } from 'react';
import { UserAccountLink } from '../UserAccountLink/UserAccountLink';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { IoIosMenu } from "react-icons/io";

export const MobileMenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <div className="md:hidden mt-2">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none" aria-expanded={isMenuOpen} aria-label="Toggle mobile menu">
        <IoIosMenu className="w-6 h-6"></IoIosMenu>
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
          <UserAccountLink iconSize="6" buttonText="My Account" />
          <div className="py-2 px-4 flex space-x-2">
            <span className="text-sm">Theme: </span>
          </div>
        </div>
      )
      }
    </div >
  )
}