import React from "react"
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-2 px-4 sm:py-4 sm:px-8 flex">
      <div className="container mx-auto items-center space-y-4 text-center">
        <Link href="/about-us">
          <h3 className="text-base sm:text-md mb-4 transition-colors duration-200 hover:text-blue-700">About Us</h3>
        </Link>
        <Link href="/contact=us">
          <h3 className="text-base sm:text-md transition-colors duration-200 hover:text-blue-700">Contact Us</h3>
        </Link>
        <p className="text-sm text-center">© {currentYear} Nexus Clothing. All rights reserved.</p>
      </div>
    </div>
  )
}
