"use client";

import React, { useState, useEffect, useRef, createContext } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion} from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type MapCard = {
    name: string;
    description: string;
    image: string;
    difficulty: string;
}

type ResourceCard = {

}

type SetBackCard = {

}

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0}: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
      };
    
    const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
          const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
          const gap = isMobile() ? 4 : 8;
          const scrollPosition = (cardWidth + gap) * (index + 1);
          carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
          setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <>
            <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}
            >
        </>
    )
}