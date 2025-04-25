
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "/lovable-uploads/f184c3b1-40e7-411a-b113-abf9473cad2f.png"
  },
  {
    image: "/lovable-uploads/6ddc6f74-e6ad-4566-8249-447bf058019d.png"
  },
  {
    image: "/lovable-uploads/104b6245-3ce9-47cf-852c-2612224ceb1c.png"
  },
  {
    image: "/lovable-uploads/52dca639-266a-49fe-92db-8aaceaef8df4.png"
  }
];

const HeroSlider = () => {
  return (
    <Carousel className="w-full bg-[#1A1F2C]">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full overflow-hidden">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default HeroSlider;
