import React from 'react'

interface ProductDisplayProps {
  title: string;
}


export const ProductCard: React.FC<ProductDisplayProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-md bg-white text-black px-20 py-28 rounded-lg">
      <div className="bg-black"></div>
      <h1 className="text-3xl">{title}</h1>
    </div>
  )
}
