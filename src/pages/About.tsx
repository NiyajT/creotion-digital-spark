import SectionHeader from "@/components/common/SectionHeader";
import TeamMember from "@/components/common/TeamMember";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Niyaj Tamboli",
      role: "Co-founder",
      bio: "Leading our creative vision with extensive experience in branding and digital marketing.",
      image: "/lovable-uploads/21784bb1-5b4f-468e-a7f7-75f849772ddb.png",
      linkedinUrl: "https://www.linkedin.com/in/niyaj-tamboli-25139410/"
    },
    {
      name: "Arbaj Butler",
      role: "Co-founder",
      bio: "Driving innovation and strategic growth in digital marketing and brand development.",
      image: "/lovable-uploads/7bc22ca8-219c-4e94-a943-8163fe02e4e4.png",
      linkedinUrl: "https://www.linkedin.com/in/arbaj-butler-a7646918a/"
    },
  ];
  
  const values = [
    {
      title: "Creativity",
      description: "We believe in pushing creative boundaries to deliver unique and impactful solutions for our clients."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, ensuring the highest quality in our work and client relationships."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, treating their business goals as our own to achieve shared success."
    },
    {
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously evolve our approaches to deliver cutting-edge solutions."
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Creotion</span>
            </h1>
            <p className="text-lg text-gray-600">
              We're a dynamic branding agency driven by passionate experts, dedicated to helping businesses build strong digital presences and authentic connections with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Our Story" 
                subtitle="How Creotion began and grew into the agency we are today."
              />
              <p className="mb-4">
                Creotion was founded with a simple mission: to help businesses tell their stories in meaningful ways that connect with their audiences. What started as a small creative team has evolved into a full-service branding and digital marketing agency.
              </p>
              <p className="mb-4">
                Our journey has been defined by a passion for creativity, a commitment to results, and genuine partnerships with our clients. We believe that every brand has a unique story, and our job is to help you tell it in the most impactful way possible.
              </p>
              <p className="mb-6">
                Today, we're proud to work with businesses across industries, helping them build strong brand identities and effective digital presences that drive growth and foster authentic connections with their audiences.
              </p>
              <Button asChild className="bg-gradient-orange hover:opacity-90">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team Collaboration" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Co-founders */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Meet Our Co-founders" 
            subtitle="The passionate experts behind Creotion's creative solutions."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            title="Our Values" 
            subtitle="The principles that guide our work and relationships."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Profile */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <SectionHeader 
            title="Connect With Us on LinkedIn" 
            subtitle="Follow Creotion for industry insights, case studies, and updates."
            center
          />
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="mb-6">
              Stay updated on our latest projects, industry trends, and marketing insights by following our LinkedIn page. We regularly share valuable content to help businesses improve their branding and digital marketing strategies.
            </p>
            <Button asChild className="bg-gradient-orange hover:opacity-90">
              <a 
                href="https://www.linkedin.com/company/creotion-branding-digital-marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin size={20} className="mr-2" /> Follow Creotion on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to elevate your brand's digital presence? Our team is ready to help you achieve your business goals.
          </p>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-creotion-orange">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
