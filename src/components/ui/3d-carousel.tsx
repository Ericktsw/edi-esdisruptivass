"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  description?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function Carousel3D({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
}: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered]);

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = items.length;
    
    // Normalize the difference to be between -totalItems/2 and totalItems/2
    let normalizedDiff = diff;
    if (normalizedDiff > totalItems / 2) {
      normalizedDiff -= totalItems;
    } else if (normalizedDiff < -totalItems / 2) {
      normalizedDiff += totalItems;
    }
    
    return normalizedDiff;
  };

  const getSlideStyles = (position: number) => {
    const absPosition = Math.abs(position);
    
    if (position === 0) {
      // Center slide
      return {
        x: 0,
        z: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
      };
    } else if (absPosition === 1) {
      // Adjacent slides
      return {
        x: position * 280,
        z: -100,
        scale: 0.8,
        opacity: 0.7,
        rotateY: position * -25,
      };
    } else if (absPosition === 2) {
      // Second level slides
      return {
        x: position * 350,
        z: -200,
        scale: 0.6,
        opacity: 0.4,
        rotateY: position * -35,
      };
    } else {
      // Hidden slides
      return {
        x: position * 400,
        z: -300,
        scale: 0.4,
        opacity: 0,
        rotateY: position * -45,
      };
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-96 flex items-center justify-center overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      {/* Slides */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="sync">
          {items.map((item, index) => {
            const position = getSlidePosition(index);
            const styles = getSlideStyles(position);
            const isVisible = Math.abs(position) <= 3;

            if (!isVisible) return null;

            return (
              <motion.div
                key={item.id}
                className="absolute cursor-pointer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  x: styles.x,
                  z: styles.z,
                  scale: styles.scale,
                  opacity: styles.opacity,
                  rotateY: styles.rotateY,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                onClick={() => goToSlide(index)}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-64 h-80 bg-white/20 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/30 hover:bg-white/30 hover:border-white/50 hover:shadow-3xl transition-all duration-500 group">
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}