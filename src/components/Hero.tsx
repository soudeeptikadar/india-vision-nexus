
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 subtle-pattern opacity-10 z-0"></div>
      
      {/* Gold Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-3 bg-india-gold z-10"></div>
      <div className="absolute top-3 right-0 w-1/4 h-2 bg-india-saffron z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-india-saffron font-medium animate-fade-in">Future-Focused Perspective</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mt-2 animate-fade-in">
                Pioneering Financial Excellence with Indian Wisdom
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg md:text-xl animate-fade-in-delay-1">
              Where global expertise meets Indian heritage. We leverage ancient principles of balance and long-term thinking with modern financial strategies.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Link to="/about" className="btn-primary inline-flex items-center">
                Our Approach
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                Start a Conversation
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay-3">
            {/* Main Image */}
            <div className="relative z-10 border-8 border-white shadow-xl">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Modern Indian business" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-4 border-b-4 border-india-saffron"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-india-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
