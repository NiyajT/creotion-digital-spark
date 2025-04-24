
import { Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedinUrl: string;
}

const TeamMember = ({ name, role, bio, image, linkedinUrl }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-creotion-orange mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <a 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-gray-600 hover:text-creotion-orange"
        >
          <Linkedin size={18} className="mr-2" /> LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
