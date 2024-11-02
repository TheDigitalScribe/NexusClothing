import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { ProductDisplayProps } from "@/types/types";
import { FaStar } from "react-icons/fa";

export const ProductCard = ({ productImage, productTitle, productDescription, price, reviewAverage, reviewAmount }: ProductDisplayProps) => {
  return (
    <CardContainer className="inter-var shadow-lg">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
        <CardItem
          isImage
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <Image
            src={productImage}
            height="1000"
            width="1000"
            className="h-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="mt-8">
          <h3 className="font-semibold text-lg md:text-xl">{productTitle}</h3>
          <p className="font-light text-md leading-relaxed mt-4">{productDescription}</p>
          <p className="font-semibold text-md leading-relaxed mt-4">€{price}</p>
          <div className="flex flex-row space-x-2 mt-4 items-center">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <p className="font-extralight text-md leading-relaxed">{reviewAverage}</p>
            <p className="font-extralight text-md leading-relaxed">({reviewAmount})</p>
          </div>
          <Button className="mt-4">View Product</Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
