import { StaticImageData } from 'next/image';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ProductDisplayProps {
  image: StaticImageData;
  title: string;
  description: string;
  price: string;
  reviewAverage: string;
  reviewAmount: string;
}

export interface BrandHighlightProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtext: string;
}

export interface TestimonialProps {
  avatar: StaticImageData;
  name: string;
  message: string;
}