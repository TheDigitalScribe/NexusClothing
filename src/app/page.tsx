import React, { Suspense } from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CardStack } from "@/components/ui/card-stack";
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Button } from "@/components/Button/Button";
import { Footer } from "../components/Footer/Footer";
import { Spinner } from "@/components/ui/spinner";
import { BrandHighlightProps } from "../types/types";
import { testimonials } from "@/data/testimonials";

import HeroImage from "./public/images/hero-image.webp";
import BlackDress from "./public/images/black-dress.webp";
import LeatherJacket from "./public/images/leather-jacket.webp";
import RippedJeans from "./public/images/ripped-jeans.webp";

import { PiCoatHanger } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const BrandHighlight = dynamic<BrandHighlightProps>(
  () => import("../components/BrandHighlight/BrandHighlight").then((mod) => ({
    default: mod.BrandHighlight
  })),
);

const LandingPage: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name || "Guest";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[75vh] lg:h-[100vh] w-full overflow-hidden">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl lead">
            {session ? (
              <>
                Welcome, <span className="text-blue-500">{userName}</span>
              </>
            ) : (
              <>
                Elevate Your <span className="text-blue-600">Style</span>, Express Your <span className="text-blue-600 leading-relaxed">Essence</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin text-white mb-8 sm:mb-12 max-w-2xl leading-relaxed">Discover clothing that speaks your language, from casual chic to bold statements</p>
          <Link href="/explore-collection">
            <Button icon={<PiCoatHanger className="h-5 w-5 mt-0.5" />} buttonText="Explore Collection" ariaLabel="Explore Collection Button" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24 items-center justify-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-light text-center">Featured Products</div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 mt-12 sm:mt-16 lg:mt-24 w-full max-w-7xl mx-auto place-items-center">
            <ProductCard
              productImage={BlackDress}
              productTitle="Black Dress"
              productDescription="Effortlessly elegant, this timeless black dress drapes beautifully to create a stunning silhouette that transitions seamlessly from day to night."
              price={29.99}
              reviewAverage={4.5}
              reviewAmount={142}>
            </ProductCard>
            <ProductCard
              productImage={LeatherJacket}
              productTitle="Leather Jacket"
              productDescription="Command attention in this expertly crafted leather jacket, featuring butter-soft genuine leather and classic moto-inspired details that exude confidence and edge."
              price={19.99}
              reviewAverage={4.3}
              reviewAmount={79}>
            </ProductCard>
            <ProductCard
              productImage={RippedJeans}
              productTitle="Ripped Jeans"
              productDescription="These perfectly distressed jeans combine authentic vintage-inspired rips with premium denim for that coveted lived-in look you've been searching for."
              price={19.99}
              reviewAverage={4.6}
              reviewAmount={93}>
            </ProductCard>
          </div>
        </div>
      </section >

      {/* Our Commitments */}
      < section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24" >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-center mb-12 sm:mb-16 lg:mb-24">
          Our Commitment To You
        </h2>
        <div className="w-full max-w-7xl">
          <Suspense fallback={<div><Spinner size="medium" show={true} /></div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 justify-items-center">
              <BrandHighlight
                Icon={FaTruck}
                title="Free Shipping"
                subtext="Enjoy free shipping on all orders over $50. We deliver to your doorstep anywhere in the continental US."
              />
              <BrandHighlight
                Icon={FaGlobe}
                title="Eco-Friendly"
                subtext="We're committed to sustainability. Our products are packaged in recyclable containers."
              />
              <BrandHighlight
                Icon={FaStar}
                title="Top-Rated"
                subtext="Consistently rated 4.8/5 stars by our customers. Quality you can trust, style you'll love."
              />
              <BrandHighlight
                Icon={FaHeart}
                title="Customer Love"
                subtext="Join our community of 100,000+ happy customers. We're dedicated to your satisfaction."
              />
            </div>
          </Suspense>
        </div>
      </section >

      {/* Testimonials */}
      < section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24" >
        <h2 className="text-xl sm:text-3xl lg:text-3xl font-light text-center mb-12 sm:mb-16 lg:mb-24">
          Testimonials
        </h2>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardStack items={testimonials} offset={8} scaleFactor={0.06} />
        </div>
      </section >

      {/* Footer */}
      < section className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-24" >
        <Footer />
      </section >
    </>
  );
};

export default LandingPage;

