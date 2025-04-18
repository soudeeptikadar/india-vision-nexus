
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rajiv Sharma",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "With over 25 years of experience in global finance and a deep understanding of Indian markets."
    },
    {
      name: "Priya Patel",
      position: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
      bio: "Former hedge fund manager with expertise in emerging markets and sustainable investments."
    },
    {
      name: "Vikram Mehta",
      position: "Head of Risk Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      bio: "Specializes in quantitative analysis and developing bespoke risk frameworks for diverse portfolios."
    },
    {
      name: "Aanya Reddy",
      position: "Director of Client Relations",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Dedicated to understanding clients' unique needs and building lasting relationships."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Our Leadership</h2>
          <p className="text-gray-600 text-lg">
            Our team brings together diverse expertise spanning global finance, 
            Indian markets, and innovative investment strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group card-hover">
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 flex gap-3 mb-4">
                    <a href="#" className="bg-white rounded-full p-2 text-primary hover:text-india-saffron transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-white rounded-full p-2 text-primary hover:text-india-saffron transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                <p className="text-india-saffron font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/about" className="btn-primary inline-block">
            Meet Our Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
