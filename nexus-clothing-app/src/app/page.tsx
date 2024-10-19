import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import HeroImage from './public/images/hero-img-min.jpg'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const Page: React.FC = () => {
  return (
    <section className={`relative h-[80vh] w-full overflow-hidden ${openSans.className}`}>
      <Image
        src={HeroImage}
        alt="Hero image of fashion model"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">Elevate Your <span className="text-blue-600">Style</span>, Express Your <span className="text-blue-600">Essence</span></h1>
        <p className="text-md md:text-lg font-thin text-white mb-12">Discover clothing that speaks your language, from casual chic to bold statements</p>
        <Link href="/products">
          <button className="rounded-full py-2 px-4 bg-blue-500 items-center text-white shadow-sm">Explore Collection</button>
        </Link>
      </div>
    </section>
  );
};

export default Page;

