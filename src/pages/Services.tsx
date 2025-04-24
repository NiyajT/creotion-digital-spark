
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-gray-600">
              We offer comprehensive branding and digital marketing solutions tailored to your business needs, helping you build a strong presence and connect with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Branding & Identity Design */}
      <section id="branding" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Branding & Identity Design" 
                subtitle="Create a distinctive brand identity that sets you apart from competitors and resonates with your target audience."
              />
              <p className="mb-6">
                Your brand is more than just a logo—it's the complete experience your customers have with your business. We develop comprehensive branding strategies that communicate your values and connect with your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Logo Design & Brand Identity Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Brand Strategy & Positioning</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Visual Storytelling & Brand Messaging</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Brand Guidelines & Style Guides</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Get Brand Consultation</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Branding Design" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing */}
      <section id="social-media" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Social Media Marketing" 
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div>
              <SectionHeader 
                title="Social Media Marketing" 
                subtitle="Grow your online presence and engage with your audience through strategic social media campaigns."
              />
              <p className="mb-6">
                Build meaningful connections with your audience on the platforms they use most. Our social media marketing services help you increase brand awareness, drive engagement, and convert followers into customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Social Media Strategy & Management</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Paid Social Advertising Campaigns</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Community Management & Engagement</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Performance Tracking & Analytics</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Boost Your Social Presence</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section id="content-creation" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Content Creation" 
                subtitle="Capture attention and convey your message with high-quality graphics and video production."
              />
              <p className="mb-6">
                Great content is at the heart of effective marketing. Our creative team produces eye-catching graphics, engaging videos, and professional reels that tell your brand story and resonate with your audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Graphic Design for Social Media & Web</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Video Production & Editing</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Professional Social Media Reels</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Animation & Motion Graphics</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Create Impactful Content</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Content Creation" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Design & Development */}
      <section id="web-design" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Website Design" 
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div>
              <SectionHeader 
                title="Website Design & Development" 
                subtitle="Create a professional online presence with user-friendly websites that drive conversions."
              />
              <p className="mb-6">
                Your website is often the first impression potential customers have of your business. We design and develop responsive, user-friendly websites that showcase your brand and convert visitors into customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Responsive Website Design</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>E-commerce Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>CMS Implementation & Training</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>SEO Optimization</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Start Your Website Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Automation & Chatbot Services */}
      <section id="chatbot" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="WhatsApp Automation & Chatbots" 
                subtitle="Streamline customer communication and provide instant support with intelligent chatbot solutions."
              />
              <p className="mb-6">
                Enhance your customer service and automate routine interactions with our WhatsApp automation and chatbot services. These intelligent solutions help you engage with customers 24/7, answer common questions, and qualify leads.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>WhatsApp Business API Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Custom Chatbot Development</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Automated Response Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-creotion-orange mr-2"></span>
                  <span>Lead Qualification & Customer Support</span>
                </li>
              </ul>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Automate Your Customer Support</Link>
              </Button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chatbot Services" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how our services can help your business grow.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-creotion-orange">
            <Link to="/contact">Request a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
