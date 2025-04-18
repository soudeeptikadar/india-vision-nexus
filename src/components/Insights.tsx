
import { Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Insights = () => {
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
      category: "Technology Trends",
      date: "October 10, 2023",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      excerpt: "Examining how technological advancements are revolutionizing financial services across India."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fancy-border pb-4 inline-block">Latest Insights</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Our team of experts regularly shares analysis, market perspectives, and thought leadership.
            </p>
          </div>
          <Link to="/insights" className="inline-flex items-center mt-6 md:mt-0 text-primary font-medium hover:text-india-saffron transition-colors">
            View all insights
            <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-md group card-hover">
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
                  <Link to="/insights">{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                <Link to="/insights" className="inline-flex items-center text-primary font-medium hover:text-india-saffron transition-colors">
                  Read more
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
