
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/20">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold">Bharat<span className="text-india-saffron">Nexus</span></span>
            </Link>
            <p className="text-white/70 mb-6">
              Blending Indian wisdom with global financial expertise to deliver exceptional value and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Insights</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Risk Management</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Asset Management</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Wealth Preservation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Investment Strategy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-india-saffron transition-colors inline-flex items-center">
                  <span>Family Office Services</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/70">
                <span className="block font-medium text-white">Mumbai Office:</span>
                Level 30, World Trade Centre<br />
                Cuffe Parade, Mumbai 400005<br />
                Maharashtra, India
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Phone:</span>
                +91 22 4001 8000
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white">Email:</span>
                info@bharatnexus.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BharatNexus. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
