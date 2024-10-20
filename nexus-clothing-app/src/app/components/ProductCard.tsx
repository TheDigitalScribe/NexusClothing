'use client';

import React from 'react'
import Image from 'next/image';
import { useTheme } from './ThemeContext';
import { ProductDisplayProps, ThemeContextType } from '../types';
import { StarIcon } from '@heroicons/react/16/solid';

export const ProductCard: React.FC<ProductDisplayProps> = ({ image, title, description, price, reviewAverage, reviewAmount }) => {
  const { theme } = useTheme() as ThemeContextType;

  return (
    <div className={`flex flex-col bg-white rounded-xl w-80 shadow-lg overflow-hidden ${theme == "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={`${title} Image`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-row space-x-4 text-sm">
          <p>{price}</p>
          <div className="flex flex-row">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <p className="ml-1">{reviewAverage}</p>
            <p className="ml-1">{reviewAmount}</p>
          </div>
        </div>
        <div className="mt-4">
          <button aria-label="View Product Button" className="rounded-full py-2 px-4 bg-blue-600 items-center text-white shadow-sm transition-colors duration-300">View Product</button>
        </div>
      </div>
    </div>
  )
}