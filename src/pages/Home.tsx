
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const Home = () => {
  const services = [
    {
      id: "branding",
      title: "Branding & Identity Design",
      description: "Craft a powerful brand identity with our expert branding services, including logo design, brand strategy, and visual storytelling.",
      icon: "🎨",
      link: "/services#branding",
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Boost your online presence with our result-driven social media marketing services across Facebook, Instagram, LinkedIn, and YouTube.",
      icon: "📱",
      link: "/services#social-media",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Elevate your brand with high-quality content, including eye-catching graphics, engaging videos, and professional reels.",
      icon: "🎬",
      link: "/services#content-creation",
    },
    {
      id: "web-design",
      title: "Website Design & Development",
      description: "Get a professional, user-friendly website that represents your brand and drives conversions with responsive design.",
      icon: "💻",
      link: "/services#web-design",
    },
    {
      id: "chatbot",
      title: "WhatsApp Automation & Chatbots",
      description: "Streamline customer communication with intelligent WhatsApp automation and chatbot services for your business.",
      icon: "🤖",
      link: "/services#chatbot",
    }
  ];
  
  const benefits = [
    "Customized strategies tailored to your business needs",
    "Expert team with proven track record",
    "Data-driven approach for maximum ROI",
    "Transparent communication and reporting",
    "Innovative solutions for your brand challenges"
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Elevate Your <span className="gradient-text">Digital Presence</span> With Creative Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                We help businesses build strong digital identities and connect authentically with their audience through strategic branding and engaging content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-orange hover:opacity-90">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up hidden lg:block">
              <img 
                src="/lovable-uploads/eef9a923-7d2d-42e2-b31d-440c8ba42db6.png" 
                alt="Strategic Brand Development" 
                className="rounded-lg shadow-xl object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-gray-50 section-padding" id="services">
        <div className="container-custom">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide a comprehensive range of services to help your business thrive in the digital landscape."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="services-card bg-white animate-slide-up">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-creotion-orange hover:underline">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl" 
              />
            </div>
            <div>
              <SectionHeader 
                title="Why Choose Creotion?" 
                subtitle="We combine creativity with data-driven strategies to deliver exceptional results for our clients."
              />
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-creotion-orange/10 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-5 w-5 text-creotion-orange" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="bg-gradient-orange hover:opacity-90 mt-8">
                <Link to="/about">About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create a powerful brand presence that connects with your audience and drives business growth.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-creotion-orange">
            <Link to="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
