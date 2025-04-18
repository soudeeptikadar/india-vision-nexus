
import { Shield, BarChart3, Gem, TrendingUp, Users, BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Risk Management",
      description: "Strategic risk assessment and mitigation solutions tailored for the Indian market and global exposures."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Asset Management",
      description: "Balancing traditional wisdom with modern portfolio theory to deliver consistent long-term returns."
    },
    {
      icon: <Gem className="w-12 h-12 text-primary" />,
      title: "Wealth Preservation",
      description: "Protecting and growing your family's wealth across generations with culturally aligned strategies."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Investment Strategy",
      description: "Thoughtful investment approaches that blend global opportunities with local insights."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Family Office",
      description: "Comprehensive management and advisory services for ultra-high-net-worth families."
    },
    {
      icon: <BadgeIndianRupee className="w-12 h-12 text-primary" />,
      title: "Institutional Advisory",
      description: "Bespoke advisory solutions for corporations, pension funds, and institutional investors."
    }
  ];

  return (
    <section className="section relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-pattern opacity-5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Our Expertise</h2>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive suite of financial services designed to meet the complex needs of 
            discerning clients across India and internationally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 group card-hover border-t-4 border-transparent hover:border-india-saffron">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-india-saffron transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/services" className="text-primary font-medium hover:text-india-saffron flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-block">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
