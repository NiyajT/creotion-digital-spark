
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const slides = [
  {
    image: "./lovable-uploads/f184c3b1-40e7-411a-b113-abf9473cad2f.png"
  },
  {
    image: "./lovable-uploads/6ddc6f74-e6ad-4566-8249-447bf058019d.png"
  },
  {
    image: "./lovable-uploads/104b6245-3ce9-47cf-852c-2612224ceb1c.png"
  },
  {
    image: "./lovable-uploads/52dca639-266a-49fe-92db-8aaceaef8df4.png"
  }
];

const HeroSlider = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload images before displaying the slider
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = slides.map(slide => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = slide.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
        console.log("All slider images loaded successfully");
      } catch (error) {
        console.error("Failed to load slider images:", error);
        setImagesLoaded(true); // Show anyway, even with errors
      }
    };
    
    loadImages();
  }, []);

  // Auto rotate slides
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="w-full h-[600px] bg-[#1A1F2C] flex items-center justify-center">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <Carousel className="w-full bg-[#1A1F2C]" selectedIndex={activeIndex} onSelect={setActiveIndex}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)} />
      <CarouselNext className="right-4" onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)} />
    </Carousel>
  );
};

export default HeroSlider;
