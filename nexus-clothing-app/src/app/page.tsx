import React, { Suspense } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from './components/Button';
import { ProductDisplayProps } from './types';
import { Open_Sans } from 'next/font/google';
import HeroImage from './public/images/hero-img.webp';
import BeanieImage from './public/images/beanie.webp';
import LeatherJacketImage from './public/images/leather-jacket.webp';
import RippedJeansImage from './public/images/ripped-jeans.webp';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

// Dynamically loading in ProductCard to optimize performance
const ProductCard = dynamic<ProductDisplayProps>(
  () => import('./components/ProductCard').then((mod) => mod.ProductCard),
  {
    loading: () => <p>Loading Product...</p>,
  }
);

const Page: React.FC = () => {
  return (
    <>
      <section className={`relative h-[80vh] w-full overflow-hidden ${openSans.className}`}>
        <Image
          src={HeroImage}
          alt="Hero image of fashion model"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">Elevate Your <span className="text-blue-600">Style</span>, Express Your <span className="text-blue-600">Essence</span></h1>
          <p className="text-md md:text-lg font-thin text-white mb-12">Discover clothing that speaks your language, from casual chic to bold statements</p>
          <Link href="/products">
            <Button text="Explore Collection" ariaLabel="Explore Collection Button" />
          </Link>
        </div>
      </section>

      <section className="flex flex-col px-4 md:px-12 mt-12 items-center justify-center">
        <div className="text-xl font-light md:text-3xl mb-8">Featured Products</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <Suspense fallback={<p>Loading products...</p>}>
            <ProductCard title="Beanie" image={BeanieImage} description="Wrap yourself in cozy comfort with our versatile beanie, designed to keep you warm and stylish in any weather." price="€11.99" reviewAverage="4.3" reviewAmount="(68)" />
            <ProductCard title="Leather Jacket" image={LeatherJacketImage} description="Elevate your style with our premium leather jacket, crafted from buttery-soft, genuine leather." price="€24.99" reviewAverage="4.6" reviewAmount="(173)" />
            <ProductCard title="Ripped Jeans" image={RippedJeansImage} description="Unleash your rebellious side with our edgy ripped jeans, featuring strategically placed tears for an effortlessly cool, lived-in look." price="€19.99" reviewAverage="4.4" reviewAmount="(126)" />
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Page;

