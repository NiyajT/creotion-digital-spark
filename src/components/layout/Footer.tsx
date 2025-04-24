
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/aff7e86f-c0f9-49a9-bdb8-7f1dff8f6753.png" 
                alt="Creotion Logo" 
                className="h-10 mb-4" 
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Creotion is a dynamic branding agency driven by passionate experts, specializing in crafting impactful social media strategies, engaging content, and powerful brand stories.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-creotion-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-creotion-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/creotion-branding-digital-marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-creotion-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-creotion-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-creotion-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-creotion-orange transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-creotion-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-creotion-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#branding" className="text-gray-600 hover:text-creotion-orange transition-colors">Branding & Identity Design</Link>
              </li>
              <li>
                <Link to="/services#social-media" className="text-gray-600 hover:text-creotion-orange transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/services#content-creation" className="text-gray-600 hover:text-creotion-orange transition-colors">Content Creation</Link>
              </li>
              <li>
                <Link to="/services#web-design" className="text-gray-600 hover:text-creotion-orange transition-colors">Website Design & Development</Link>
              </li>
              <li>
                <Link to="/services#chatbot" className="text-gray-600 hover:text-creotion-orange transition-colors">WhatsApp Automation & Chatbots</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-creotion-orange flex-shrink-0 mt-1" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-creotion-orange flex-shrink-0 mt-1" />
                <span className="text-gray-600">contact@creotion.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-creotion-orange flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Business Street, Suite 100<br />Marketing City, MC 12345</span>
              </li>
              <li>
                <a 
                  href="https://g.co/kgs/SEynhfC"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-creotion-orange hover:underline"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-center text-gray-600">
            &copy; {currentYear} Creotion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
