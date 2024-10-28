import React, { Suspense } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from './components/Button/Button';
import { Footer } from './components/Footer/Footer';
import { ProductDisplayProps, BrandHighlightProps, TestimonialProps } from './types';

import HeroImage from './public/images/hero-img.webp';
import BeanieImage from './public/images/beanie.webp';
import LeatherJacketImage from './public/images/leather-jacket.webp';
import RippedJeansImage from './public/images/ripped-jeans.webp';
import MaleAvatar1 from './public/images/male-avatar-1.webp';
import FemaleAvatar1 from './public/images/female-avatar-1.webp';
import FemaleAvatar2 from './public/images/female-avatar-2.webp';

import { TruckIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';

// Dynamically loading in ProductCard to optimize performance
const ProductCard = dynamic<ProductDisplayProps>(
  () => import('./components/ProductCard/ProductCard').then((mod) => ({
    default: mod.ProductCard
  })),
  {
    loading: () => <p>Loading Products...</p>,
  }
);

const BrandHighlight = dynamic<BrandHighlightProps>(
  () => import('./components/BrandHighlight/BrandHighlight').then((mod) => ({
    default: mod.BrandHighlight
  })),
  {
    loading: () => <p>Loading Brand Highlights...</p>,
  }
);

const Testimonial = dynamic<TestimonialProps>(
  () => import('./components/Testimonial').then((mod) => ({
    default: mod.Testimonial
  })),
  {
    loading: () => <p>Loading Testimonials...</p>,
  }
);

const Page: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`relative h-[100vh] w-full overflow-hidden`}>
        <Image
          src={HeroImage}
          alt="Hero image of fashion model"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl lead">Elevate Your <span className="text-blue-600">Style</span>, Express Your <span className="text-blue-600 leading-relaxed">Essence</span></h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin text-white mb-8 sm:mb-12 max-w-2xl leading-relaxed">Discover clothing that speaks your language, from casual chic to bold statements</p>
          <Link href="/products">
            <Button text="Explore Collection" ariaLabel="Explore Collection Button" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24 items-center justify-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-light text-center">Featured Products</div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 mt-12 sm:mt-16 lg:mt-24 w-full max-w-7xl mx-auto place-items-center">
            <Suspense fallback={<p>Loading products...</p>}>
              <ProductCard title="Beanie" image={BeanieImage} description="Wrap yourself in cozy comfort with our versatile beanie, designed to keep you warm and stylish in any weather." price="€11.99" reviewAverage="4.3" reviewAmount="(68)" />
              <ProductCard title="Leather Jacket" image={LeatherJacketImage} description="Elevate your style with our premium leather jacket, crafted from buttery-soft, genuine leather." price="€24.99" reviewAverage="4.6" reviewAmount="(173)" />
              <ProductCard title="Ripped Jeans" image={RippedJeansImage} description="Unleash your rebellious side with our edgy ripped jeans, for an effortlessly cool, lived-in look." price="€19.99" reviewAverage="4.4" reviewAmount="(126)" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-center mb-12 sm:mb-16 lg:mb-24">
          Our Commitment To You
        </h2>
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 justify-items-center">
            <Suspense fallback={<p>Loading brand highlights...</p>}>
              <BrandHighlight
                Icon={TruckIcon}
                title="Free Shipping"
                subtext="Enjoy free shipping on all orders over $50. We deliver to your doorstep anywhere in the continental US."
              />
              <BrandHighlight
                Icon={GlobeAltIcon}
                title="Eco-Friendly"
                subtext="We're committed to sustainability. Our products are packaged in recyclable containers."
              />
              <BrandHighlight
                Icon={StarIcon}
                title="Top-Rated"
                subtext="Consistently rated 4.8/5 stars by our customers. Quality you can trust, style you'll love."
              />
              <BrandHighlight
                Icon={HeartIcon}
                title="Customer Love"
                subtext="Join our community of 100,000+ happy customers. We're dedicated to your satisfaction."
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24">
        <h2 className="text-xl sm:text-3xl lg:text-3xl font-light text-center mb-12 sm:mb-16 lg:mb-24">
          Testimonials
        </h2>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm">
            <Suspense fallback={<p>Loading testimonials...</p>}>
              <Testimonial
                avatar={MaleAvatar1}
                name="Alex M."
                message="Shopping here has been consistently great. The clothes are high quality, sizing is accurate, and everything arrives quickly. What really stands out is how easy they make the whole experience - from browsing to checkout."
                changeImagePosition={true}
              />
              <Testimonial
                avatar={FemaleAvatar1}
                name="Claire C."
                message="I'm absolutely in love with my recent purchase! The attention to detail in the stitching and design shows real craftsmanship. The size guide was spot-on, and the clothes look exactly like the photos. Will definitely be shopping here again!"
                changeImagePosition={true}
              />
              <Testimonial
                avatar={FemaleAvatar2}
                name="Erica S."
                message="I was skeptical about Nexus Clothing at first, but this site won me over completely. The quality exceeds what you'd find in most retail stores, and their attention to detail is impressive"
                changeImagePosition={false}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24">
        <Footer />
      </section>
    </>
  );
};

export default Page;

