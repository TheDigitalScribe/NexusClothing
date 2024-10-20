'use client';

import React from 'react'
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  return (
    <form className="flex items-center">
      <div className="relative">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="px-4 py-1 w-40 text-sm md:text-base border border-gray-300 rounded-full focus:outline-blue-400" ></input>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
      </div>
    </form>
  )
}
