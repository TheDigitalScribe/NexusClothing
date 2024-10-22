import React from 'react'

interface BrandHighlight {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtext: string;
}

export const BrandHighlight = ({ Icon, title, subtext }: BrandHighlight) => {
  return (
    <div className="flex flex-col items-center w-60">
      <Icon className="w-12 h-12 text-blue-500" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="leading-1 mt-2">{subtext}</p>
    </div>
  )
}
