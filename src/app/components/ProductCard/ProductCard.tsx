"use client";

import React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductDisplayProps } from "../../types";
import { StarIcon } from "@heroicons/react/16/solid";

export const ProductCard: React.FC<ProductDisplayProps> = ({ image, title, description, price, reviewAverage, reviewAmount }) => {

  return (
    <div className="card flex flex-col w-80 rounded-xl shadow-lg overflow-hidden">
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
          <Button buttonText="View Product" ariaLabel="View Product Button" />
        </div>
      </div>
    </div>
  )
}