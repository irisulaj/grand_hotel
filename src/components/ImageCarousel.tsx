import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  autoplay?: boolean;
  delayMs?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  autoplay = true,
  delayMs = 5000,
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
  const { t } = useLanguage();
  return (
    <div className={`relative group ${className}`}>
      <br />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-6xl mb-6">{t("home.welcome")}</h1>
          <p className="text-xl mb-12 tracking-wide">{t("home.subtitle")}</p>
          <Link to="/rooms" className="btn-primary">
            {t("home.discover")}
          </Link>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
