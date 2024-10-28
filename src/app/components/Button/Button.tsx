import React from 'react'

interface Button {
  text: string;
  ariaLabel: string;
  onClick: () => void;
}

export const Button = ({ text, ariaLabel, onClick }: Button) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel} className="rounded-full py-2 px-4 bg-blue-600 items-center text-white shadow-sm transition-colors duration-300">{text}</button>
  )
}
