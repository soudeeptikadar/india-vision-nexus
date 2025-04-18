
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Search, ChevronRight } from "lucide-react";
import { useState } from "react";

const Insights = () => {
  const categories = ["All", "Market Analysis", "Investment Strategy", "Risk Management", "ESG Investments", "Technology", "Economic Outlook"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const articles = [
    {
      title: "Navigating Market Volatility: An Indian Perspective",
      category: "Market Analysis",
      date: "August 15, 2023",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Exploring how traditional Indian financial wisdom provides insights into managing modern market volatility."
    },
    {
      title: "Sustainable Investing in Emerging Markets",
      category: "ESG Investments",
      date: "September 22, 2023",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "How ESG considerations are reshaping investment landscapes in India and other emerging economies."
    },
    {
      title: "Digital Transformation in Indian Financial Services",
      category: "Technology",
      date: "October 10, 2023",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      excerpt: "Examining how technological advancements are revolutionizing financial services across India."
    },
    {
      title: "The Impact of Monetary Policy on Market Dynamics",
      category: "Economic Outlook",
      date: "November 5, 2023",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Analyzing how central bank policies influence financial markets and investment opportunities."
    },
    {
      title: "Diversification Strategies for Indian Investors",
      category: "Investment Strategy",
      date: "November 18, 2023",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      excerpt: "Exploring effective approaches to portfolio diversification in the Indian context."
    },
    {
      title: "Risk Management in Volatile Markets",
      category: "Risk Management",
      date: "December 3, 2023",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Strategies for mitigating risk during periods of heightened market uncertainty."
    },
    {
      title: "The Role of Alternative Investments in Modern Portfolios",
      category: "Investment Strategy",
      date: "January 12, 2024",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Evaluating the place of alternative assets in well-balanced investment portfolios."
    },
    {
      title: "Global Economic Trends and Their Impact on Indian Markets",
      category: "Economic Outlook",
      date: "February 7, 2024",
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Understanding how international economic developments influence domestic market performance."
    },
    {
      title: "Behavioral Finance: Overcoming Investment Biases",
      category: "Market Analysis",
      date: "March 22, 2024",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      excerpt: "Identifying and addressing common cognitive biases that affect investment decisions."
    }
  ];

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 bg-primary text-white">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Insights & Perspectives</h1>
            <p className="text-xl text-white/80">
              Expert analysis and thought leadership from our team of specialists.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter & Search */}
      <section className="py-10 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search insights..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article key={index} className="bg-white shadow-md group card-hover">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="bg-india-saffron text-white text-sm py-1 px-3">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-india-saffron transition-colors">
                    <a href="#">{article.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:text-india-saffron transition-colors">
                    Read more
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <nav className="inline-flex">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-india-saffron bg-white border-t border-b border-gray-300 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
              >
                3
              </a>
              <span className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300">
                ...
              </span>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 text-lg mb-8">
              Stay updated with our latest insights and market perspectives.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap inline-flex items-center justify-center"
              >
                Subscribe
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insights;
