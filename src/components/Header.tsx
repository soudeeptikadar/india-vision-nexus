
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-primary">Bharat<span className="text-india-saffron">Nexus</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/about" className="nav-link font-medium">About</Link>
          <Link to="/services" className="nav-link font-medium">Services</Link>
          <Link to="/insights" className="nav-link font-medium">Insights</Link>
          <Link to="/contact" className="nav-link font-medium">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container-custom py-5 flex flex-col space-y-4">
            <Link to="/" className="nav-link font-medium block" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link font-medium block" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="nav-link font-medium block" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/insights" className="nav-link font-medium block" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link to="/contact" className="nav-link font-medium block" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
