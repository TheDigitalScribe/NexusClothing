import React from 'react'

interface Button {
  text: string;
  ariaLabel: string;
}

export const Button = ({ text, ariaLabel }: Button) => {
  return (
    <button aria-label={ariaLabel} className="rounded-full py-2 px-4 bg-blue-600 items-center text-white shadow-sm transition-colors duration-300">{text}</button>
  )
}
