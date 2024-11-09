"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SearchBar } from "../SearchBar/SearchBar";
import { Switch } from "@/components/ui/switch"
import { MobileMenu } from "@/components/ui/mobile-menu";
import { MobileSearchBarDialog } from "@/components/ui/mobile-searchbar-dialog";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export const Header: React.FC = () => {
  const [user, setUser] = useState(false);

  const authPageLink = user ? "/user" : "/auth/login";

  return (
    <nav className="py-3 sm:py-4 px-4 sm:px-6 lg:px-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-200 hover:text-blue-700">NEXUS</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-8 items-center justify-center flex-grow">
          <Link href="/women-products" className="text-sm lg:text-lg transition-colors duration-200 hover:text-blue-700">Women</Link>
          <Link href="/men-products" className="text-sm lg:text-lg transition-colors duration-200 hover:text-blue-700">Men</Link>
          <Link href="/accessories" className="text-sm lg:text-lg transition-colors duration-200 hover:text-blue-700">Accessories</Link>
          <Link href="/sales" className="text-sm lg:text-lg transition-colors duration-200 hover:text-blue-700">Sales</Link>
        </div>

        {/* Searchbar, Shopping Cart and Account */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:flex">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button aria-label="Shopping Cart Button">
              <FaShoppingCart className="w-6 h-6 transition-colors duration-200 hover:fill-blue-700/90" />
            </button>
            <Link href={authPageLink}>
              <button aria-label="Account Button" className="mt-1">
                <FaUser className="w-6 h-6 transition-colors duration-200 hover:fill-blue-700/90" />
              </button>
            </Link>
          </div>
          <div>
            <Switch />
          </div>
        </div>

        {/* Hamburger Menu and Search Icon for Mobile */}
        <div className="flex md:hidden space-x-4 items-center justify-center">
          <MobileSearchBarDialog />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}