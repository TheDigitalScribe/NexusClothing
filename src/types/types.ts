import { StaticImageData } from 'next/image';

export type Theme = 'light' | 'dark';

export interface ProductDisplayProps {
  productImage: StaticImageData;
  productTitle: string;
  productDescription: string;
  price: number;
  reviewAverage: number;
  reviewAmount: number;
}

export interface BrandHighlightProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtext: string;
}

type Card = {
  id: number;
  designation: string;
  message: string;
};

export type CardStackProps = {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}