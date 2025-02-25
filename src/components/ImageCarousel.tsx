import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  autoplay?: boolean;
  delayMs?: number;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  autoplay = true,
  delayMs = 5000,
  title,
  subtitle,
  buttonText,
  buttonLink,
  onButtonClick,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 20,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (autoplay && emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, delayMs);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi, autoplay, delayMs]);

  return (
    <div className={`relative group ${className}`}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
            </div>
          ))}
        </div>
      </div>

      {(title || subtitle || buttonText) && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            {title && (
              <h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 
                           animate-fadeIn [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]"
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <p
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 
                          max-w-2xl mx-auto leading-relaxed tracking-wide animate-fadeIn 
                          [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]"
              >
                {subtitle}
              </p>
            )}
            {buttonText && buttonLink && (
              <Link
                to={buttonLink}
                onClick={onButtonClick}
                className="btn-primary inline-block animate-fadeIn"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      )}

      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
                   p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 
                   transition-all duration-300 z-30 focus:outline-none focus:ring-2 
                   focus:ring-white/50"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
                   p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 
                   transition-all duration-300 z-30 focus:outline-none focus:ring-2 
                   focus:ring-white/50"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
