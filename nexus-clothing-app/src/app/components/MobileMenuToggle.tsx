// Required for marking component as Client Component in Next.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const MobileMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-all duration-500 focus:outline-none" aria-expanded={isMenuOpen}
        aria-label="Toggle mobile menu">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>

      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 shadow-md">
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

export default MobileMenuToggle