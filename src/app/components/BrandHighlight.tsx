import React from 'react'
import { BrandHighlightProps } from '../types'

export const BrandHighlight = ({ Icon, title, subtext }: BrandHighlightProps) => {
  return (
    <div className="flex flex-col items-center w-60">
      <Icon className="w-12 h-12 text-blue-500" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="leading-relaxed mt-2">{subtext}</p>
    </div>
  )
}
