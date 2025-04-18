
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, Calendar, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Reach out to discuss how we can help you achieve your financial objectives.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 fancy-border pb-4 inline-block">Get in Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:text-india-saffron">Privacy Policy</a> and consent to having my data processed.
                  </label>
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
              <h2 className="text-3xl font-serif font-bold mb-8 fancy-border pb-4 inline-block">Connect With Us</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 shadow-md mr-4">
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
                  <div className="bg-gray-50 p-3 shadow-md mr-4">
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
                  <div className="bg-gray-50 p-3 shadow-md mr-4">
                    <Phone className="w-6 h-6 text-india-saffron" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone</h4>
                    <p className="text-gray-600">
                      +91 22 4001 8000 (Mumbai)<br />
                      +91 11 4001 5000 (New Delhi)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 shadow-md mr-4">
                    <Mail className="w-6 h-6 text-india-saffron" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <p className="text-gray-600">
                      info@bharatnexus.com (General Inquiries)<br />
                      careers@bharatnexus.com (Career Opportunities)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-50 p-3 shadow-md mr-4">
                    <Clock className="w-6 h-6 text-india-saffron" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 border-l-4 border-india-saffron">
                <h4 className="flex items-center font-bold text-lg mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-india-saffron" />
                  Schedule a Meeting
                </h4>
                <p className="text-gray-600 mb-4">
                  Prefer to speak with us directly? Schedule a consultation with one of our advisors at a time that works for you.
                </p>
                <a href="#" className="btn-primary inline-flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="h-96 relative mt-8">
        <div className="absolute inset-0 bg-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.214905284446!2d72.81402431469643!3d18.920695087170815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485831f25ac!2sWorld%20Trade%20Centre%20Mumbai!5e0!3m2!1sen!2sin!4v1648830593559!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our services and approach.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-serif font-bold mb-3">What is your minimum investment requirement?</h3>
              <p className="text-gray-600">
                Our investment strategies typically require a minimum of ₹1 crore, but this can vary based on the specific service and solution. We'd be happy to discuss your specific situation during an initial consultation.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-serif font-bold mb-3">How do you approach risk management?</h3>
              <p className="text-gray-600">
                We believe in a comprehensive approach to risk management that combines quantitative models with qualitative insights. Our strategies incorporate both traditional Indian principles of prudence and modern risk assessment techniques.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-serif font-bold mb-3">Do you work with international clients?</h3>
              <p className="text-gray-600">
                Yes, we serve clients globally, particularly those with interests in Indian markets or those of Indian origin looking for expertise that bridges global best practices with Indian market knowledge.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-xl font-serif font-bold mb-3">What makes your approach different from other firms?</h3>
              <p className="text-gray-600">
                Our unique approach combines global financial expertise with deep understanding of Indian markets and cultural values. We balance modern portfolio theory with traditional Indian principles of wealth preservation and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
