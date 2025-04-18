
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            Reach out to discuss how we can help you achieve your financial objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-primary inline-flex items-center">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Our Offices</h3>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md mr-4">
                  <MapPin className="w-6 h-6 text-india-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mumbai Headquarters</h4>
                  <p className="text-gray-600">
                    Level 30, World Trade Centre<br />
                    Cuffe Parade, Mumbai 400005<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md mr-4">
                  <MapPin className="w-6 h-6 text-india-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">New Delhi Office</h4>
                  <p className="text-gray-600">
                    The Oberoi, Dr. Zakir Hussain Marg<br />
                    New Delhi 110003<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md mr-4">
                  <Phone className="w-6 h-6 text-india-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <p className="text-gray-600">
                    +91 22 4001 8000<br />
                    +91 11 4001 5000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md mr-4">
                  <Mail className="w-6 h-6 text-india-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <p className="text-gray-600">
                    info@bharatnexus.com<br />
                    careers@bharatnexus.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
