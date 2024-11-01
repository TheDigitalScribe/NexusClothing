"use client";

import React from 'react'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex items-center" role="search" onSubmit={handleSubmit}>
      <div className="relative">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search" placeholder="Search..." className="px-4 py-1 w-40 text-sm md:text-base border border-gray-400 dark:border-gray-700 rounded-full bg-gray-200 dark:bg-gray-900"></input>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <IoSearch className="w-5 h-5" />
        </div>
      </div>
    </form>
  );
};
