'use client';

import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { useTheme } from './ThemeContext';
import { TestimonialProps, ThemeContextType } from '../types';

export const Testimonial = ({ avatar, name, message }: TestimonialProps) => {
  const { theme } = useTheme() as ThemeContextType;

  return (
    <div className={`w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 ${theme == "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Image Container */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={`${name}'s testimonial`}
            width={112}
            height={112}
            className="object-cover aspect-square shadow-xl"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col text-center sm:text-left">
          <h3 className="text-lg font-bold mt-2">
            {name}
          </h3>
          <p className="leading-relaxed mt-2">{message}</p>
        </div>
      </div>
    </div>

  )
}
