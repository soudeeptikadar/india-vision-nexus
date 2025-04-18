
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About BharatNexus</h1>
            <p className="text-xl text-white/80">
              Our heritage, values, and commitment to excellence in financial services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551134499-5c551c9f1a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Office building" 
                  className="w-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r-4 border-b-4 border-india-gold z-0"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Our Vision</h2>
                <p className="text-gray-600 mb-6">
                  To be India's most trusted financial advisory firm, known for our integrity, expertise, and innovative solutions that bridge traditional wisdom with modern financial practices.
                </p>
                <p className="text-gray-600">
                  We envision a world where financial decisions are guided by both analytical rigor and cultural values, creating sustainable prosperity that respects heritage while embracing progress.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Our Mission</h2>
                <p className="text-gray-600">
                  To deliver exceptional financial services that honor India's rich heritage of economic thought while embracing global best practices. We are committed to creating tailored solutions for our clients that reflect their unique needs, values, and aspirations.
                </p>
              </div>
              
              <div>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Our Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do at BharatNexus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-india-saffron text-4xl font-serif">E</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in all our endeavors, striving to exceed expectations and deliver outstanding results for our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-india-saffron text-4xl font-serif">I</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards, maintaining transparency and honesty in all our client relationships.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-india-saffron text-4xl font-serif">W</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Wisdom</h3>
              <p className="text-gray-600">
                We blend time-tested Indian financial principles with contemporary expertise to create balanced, thoughtful strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <Team />
      
      <Footer />
    </div>
  );
};

export default About;
