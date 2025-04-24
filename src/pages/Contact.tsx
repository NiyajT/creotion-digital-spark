import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SectionHeader from "@/components/common/SectionHeader";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-600">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service You're Interested In
                  </label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="branding">Branding & Identity Design</SelectItem>
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="content-creation">Content Creation</SelectItem>
                      <SelectItem value="web-design">Website Design & Development</SelectItem>
                      <SelectItem value="chatbot">WhatsApp Automation & Chatbots</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-orange hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-creotion-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+91 7709578480</p>
                    <p className="text-gray-600">+91 96046 80374</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-creotion-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info.creotion@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-creotion-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Office Location</h3>
                    <p className="text-gray-600">
                      Plot No. 14, Old Budhgaon Rd,<br />
                      in front of Shanti Niketan School,<br />
                      Chavan Colony, Sangli,<br />
                      Sangli Miraj Kupwad, Maharashtra 416416
                    </p>
                    <a 
                      href="https://g.co/kgs/SEynhfC"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-creotion-orange hover:underline inline-block mt-2"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/creotion.agency" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-creotion-orange transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://www.instagram.com/creotion_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-creotion-orange transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/creotion-branding-digital-marketing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-creotion-orange transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and process."
            center
          />
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. A branding project might take 3-4 weeks, while website development could take 4-8 weeks. We'll provide specific timelines during our consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">What's your pricing structure?</h3>
              <p className="text-gray-600">
                We offer customized quotes based on project requirements. We work with businesses of all sizes and provide options to fit various budgets. Contact us for a detailed quote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-600">
                Yes! We offer maintenance packages for websites and ongoing management for social media and digital marketing campaigns to ensure continued success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">What industries do you work with?</h3>
              <p className="text-gray-600">
                We work with clients across various industries, including retail, healthcare, technology, education, and professional services. Our strategies are customized for each industry's unique needs.
              </p>
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

export default Contact;
