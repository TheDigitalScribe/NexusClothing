import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroImage from "../public/images/hero-image.webp";
import BlackDress from "../public/images/black-dress.webp";


const ExploreCollectionPage = () => {
  return (
    <>
      <section className="relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="h-[40vh] lg:h-[75vh]"><Image src={HeroImage} alt="Hero image of fashion model" priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" className="object-cover" /></CarouselItem>
            <CarouselItem className="h-[40vh] lg:h-[75vh]"><Image src={BlackDress} alt="Hero image of fashion model" priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" className="object-cover" /></CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  )
}

export default ExploreCollectionPage;
