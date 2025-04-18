
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Shield, BarChart3, Gem, TrendingUp, Users, BadgeIndianRupee, LineChart, BadgeDollarSign, Globe, FileLineChart } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const primaryServices = [
    {
      icon: <Shield className="w-16 h-16 text-india-saffron" />,
      title: "Risk Management",
      description: "Strategic risk assessment and mitigation solutions tailored for the Indian market and global exposures. Our comprehensive approach combines quantitative models with qualitative insights.",
      features: [
        "Portfolio risk assessment",
        "Market risk analysis",
        "Operational risk management",
        "Regulatory compliance"
      ]
    },
    {
      icon: <BarChart3 className="w-16 h-16 text-india-saffron" />,
      title: "Asset Management",
      description: "Balancing traditional wisdom with modern portfolio theory to deliver consistent long-term returns. We focus on creating resilient portfolios that withstand market volatility.",
      features: [
        "Multi-asset class portfolios",
        "Alternative investments",
        "Value-oriented strategies",
        "Long-term capital preservation"
      ]
    },
    {
      icon: <Gem className="w-16 h-16 text-india-saffron" />,
      title: "Wealth Preservation",
      description: "Protecting and growing your family's wealth across generations with culturally aligned strategies. We incorporate traditional Indian values of legacy planning and wealth transfer.",
      features: [
        "Estate planning",
        "Succession planning",
        "Tax-efficient structures",
        "Philanthropy advisory"
      ]
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-india-saffron" />,
      title: "Investment Strategy",
      description: "Thoughtful investment approaches that blend global opportunities with local insights. Our strategies are designed to capitalize on India's growth story while diversifying globally.",
      features: [
        "Strategic asset allocation",
        "Emerging market opportunities",
        "Global macro perspectives",
        "Tactical portfolio adjustments"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Family Office Services",
      description: "Comprehensive management and advisory services for ultra-high-net-worth families."
    },
    {
      icon: <BadgeIndianRupee className="w-10 h-10 text-primary" />,
      title: "Institutional Advisory",
      description: "Bespoke advisory solutions for corporations, pension funds, and institutional investors."
    },
    {
      icon: <LineChart className="w-10 h-10 text-primary" />,
      title: "Financial Planning",
      description: "Personalized financial roadmaps aligned with your life goals and aspirations."
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-primary" />,
      title: "Direct Investments",
      description: "Strategic direct investment opportunities in growing Indian and international markets."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Global Markets Access",
      description: "Seamless access to international markets with local expertise and support."
    },
    {
      icon: <FileLineChart className="w-10 h-10 text-primary" />,
      title: "Research & Analysis",
      description: "In-depth research and analysis on market trends, sectors, and investment opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive financial solutions with an Indian perspective.
            </p>
          </div>
        </div>
      </section>
      
      {/* Primary Services */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Core Expertise</h2>
            <p className="text-gray-600 text-lg">
              Our primary services are designed to provide comprehensive solutions for complex financial needs.
            </p>
          </div>
          
          <div className="space-y-20">
            {primaryServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-3xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-india-saffron mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn-primary inline-block">
                    Enquire Now
                  </Link>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <img 
                      src={`https://source.unsplash.com/random/600x400?finance,${index}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-india-gold z-0"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Additional Services</h2>
            <p className="text-gray-600 text-lg">
              Complementary offerings to support your comprehensive financial strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 group card-hover border-t-2 border-transparent hover:border-india-saffron">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-india-saffron transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to="/contact" className="text-primary font-medium hover:text-india-saffron flex items-center">
                  Learn more 
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-primary text-white p-12 rounded-lg relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-india-saffron/20 rounded-full -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-india-gold/20 rounded-full -mb-20 -ml-20"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Transform Your Financial Strategy?</h2>
              <p className="text-white/80 text-lg mb-8">
                Connect with our team of experts to discover how our services can be tailored to your unique financial needs.
              </p>
              <Link to="/contact" className="btn-secondary inline-block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
