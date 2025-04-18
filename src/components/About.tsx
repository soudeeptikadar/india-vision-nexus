
import { Award, TrendingUp, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="section bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">About BharatNexus</h2>
          <p className="text-gray-600 text-lg">
            Founded on the principles of integrity, excellence, and cultural wisdom, 
            BharatNexus stands at the intersection of traditional values and modern finance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580674571597-34b644d4ebfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80" 
                alt="Modern office in India" 
                className="w-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r-4 border-b-4 border-india-gold z-0"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision & Heritage</h3>
              <p className="text-gray-600 mb-4">
                At BharatNexus, we blend the timeless financial wisdom of India with 
                global best practices to deliver exceptional value to our clients. Our approach 
                is rooted in both innovative thinking and the time-tested principles of prudence.
              </p>
              <p className="text-gray-600">
                We believe in sustainable growth, long-term relationships, and the power of 
                combining Eastern philosophical depth with Western analytical precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Award className="w-10 h-10 text-india-saffron mx-auto mb-2" />
                <h4 className="font-medium">Excellence</h4>
              </div>
              <div className="text-center p-4">
                <TrendingUp className="w-10 h-10 text-india-saffron mx-auto mb-2" />
                <h4 className="font-medium">Growth</h4>
              </div>
              <div className="text-center p-4">
                <Briefcase className="w-10 h-10 text-india-saffron mx-auto mb-2" />
                <h4 className="font-medium">Integrity</h4>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="/about" className="btn-primary inline-block">
                Learn Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
