
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Where stories",
    subtitle: "Spark connections",
    description: "More than just an agency, We're your brand's storytelling Powerhouse.",
    image: "/lovable-uploads/f184c3b1-40e7-411a-b113-abf9473cad2f.png"
  },
  {
    title: "CRAFT",
    subtitle: "Compelling content that fuels your brand.",
    description: "",
    image: "/lovable-uploads/6ddc6f74-e6ad-4566-8249-447bf058019d.png"
  },
  {
    title: "CONNECT",
    subtitle: "Through strategic",
    description: "Digital Marketing.",
    image: "/lovable-uploads/104b6245-3ce9-47cf-852c-2612224ceb1c.png"
  },
  {
    title: "IMPACT",
    subtitle: "With market research that",
    description: "guides your strategy.",
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
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="container mx-auto h-full flex items-center">
                  <div className="max-w-2xl text-white p-8">
                    <h2 className="text-creotion-orange text-5xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {slide.subtitle}
                    </h3>
                    {slide.description && (
                      <p className="text-xl md:text-2xl">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
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
