import React from 'react'
import { BrandHighlightProps } from '../../../types/types'

export const BrandHighlight = ({ Icon, title, subtext }: BrandHighlightProps) => {
  return (
    <div className="flex flex-col items-center w-60">
      <Icon data-testid="brand-highlight-icon" className="w-12 h-12 text-blue-500" />
      <h3 className="text-md lg:text-xl font-bold mt-2">{title}</h3>
      <p className="text-sm text-center lg:text-md leading-relaxed mt-2">{subtext}</p>
    </div>
  )
}
