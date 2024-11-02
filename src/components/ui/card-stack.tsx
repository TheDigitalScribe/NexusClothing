"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spinner } from "@/components/ui/spinner";
import axios from "axios";
import BlankPlaceholder from "../../app/public/images/blank-user-image.webp";
import { IoIosCheckmarkCircle } from "react-icons/io";

type UserData = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
};

type Card = {
  id: number;
  designation: string;
  message: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [enrichedCards, setEnrichedCards] = useState<(Card & { userData: UserData | null })[]>([]);
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const intervalRef = useRef<NodeJS.Timeout>();

  // Fetch user data and enrich cards
  useEffect(() => {
    const enrichCardsWithUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${items.length}`
        );

        const enriched = items.map((card, index) => ({
          ...card,
          userData: response.data.results[index] || null,
        }));

        setEnrichedCards(enriched);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user data'));
      } finally {
        setIsLoading(false);
      }
    };

    enrichCardsWithUserData();
  }, [items]);

  // Handle card flipping
  useEffect(() => {
    const startFlipping = () => {
      intervalRef.current = setInterval(() => {
        setEnrichedCards((prevCards) => {
          const newArray = [...prevCards];
          const lastCard = newArray.pop();
          if (lastCard) {
            newArray.unshift(lastCard);
          }
          return newArray;
        });
      }, 5000);
    };

    if (!isLoading && enrichedCards.length > 0) {
      startFlipping();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoading, enrichedCards.length]);

  if (isLoading) {
    return (
      <Spinner size="medium" />
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="relative h-[300px] w-full max-w-2xl mx-auto mt-4">
      {enrichedCards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05]"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: enrichedCards.length - index,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col gap-4">
            <p className="text-neutral-700 dark:text-neutral-200 text-sm md:text-base">
              {card.message}
            </p>

            <div className="flex flex-row gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src={card.userData?.picture.thumbnail || BlankPlaceholder}
                  alt={`Avatar of ${card.userData?.name.first || 'user'}`}
                  fill
                  className="rounded-full"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                />
              </div>
              <div className="mt-auto">
                <p className="text-neutral-900 dark:text-white font-medium">
                  {card.userData
                    ? `${card.userData.name.first} ${card.userData.name.last}`
                    : "Anonymous"}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                    {card.designation}
                  </p>
                  <IoIosCheckmarkCircle className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
