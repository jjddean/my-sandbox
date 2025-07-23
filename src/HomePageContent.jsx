import React, { useState } from 'react';
import { Search, Settings, Cloud, Newspaper, ShoppingCart, ThumbsUp, Bookmark, PlayCircle, Heart, Share2, MessageSquare, Briefcase, SlidersHorizontal, User } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Health & Wellbeing Products Data
const healthProducts = [
  {
    name: "Ashwagandha & Magnesium",
    url: "https://www.amazon.com/New-Chapter-Ashwagandha-Supplement-Absorption/dp/B085V62B83?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Vb6FQwQwL._AC_SL1500_.jpg",
    description: "High-absorption ashwagandha and magnesium for stress relief and relaxation."
  },
  {
    name: "Mushroom Coffee Blend",
    url: "https://www.amazon.com/RYZE-Mushroom-Adaptogenic-Mushrooms-Digestion/dp/B0DJWV4BQ1?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Adaptogenic mushroom coffee blend for energy and digestion."
  },
  {
    name: "Adaptogenic Energy Supplement",
    url: "https://www.amazon.com/plnt-Adaptogen-Ingredients-Vitality-Vegetarian/dp/B01N9H8KY6?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Plant-based adaptogen supplement for vitality and energy."
  },
  {
    name: "Stress Relief Herbal Tea",
    url: "https://www.amazon.com/Yogi-Tea-Tension-Promotes-Relaxation/dp/B0009F3QKW?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Herbal tea blend to promote relaxation and relieve tension."
  },
  {
    name: "Sleep Support Melatonin",
    url: "https://www.amazon.com/Natrol-Melatonin-10Mg-Gummy-Count/dp/B079TD7HG2?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Melatonin gummies for natural sleep support."
  },
  {
    name: "CBD-Infused Massage Oil",
    url: "https://www.amazon.com/Provocatife-Infused-Massage-fl-oz-Bottle/dp/B0D2PH1GVB?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "CBD-infused massage oil for relaxation and muscle relief."
  },
  {
    name: "Infrared Sauna Blanket",
    url: "https://www.amazon.com/infrared-sauna-blanket/s?k=infrared+sauna+blanket&tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Infrared sauna blanket for detox and wellness."
  },
  {
    name: "CBD Gummies for Stress",
    url: "https://www.amazon.com/Gummies-Stress-Relaxation-Anxiety-Relaxing/dp/B08CKF6DQC?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "CBD gummies to help with stress and relaxation."
  },
  {
    name: "Essential Oil Diffuser",
    url: "https://www.amazon.com/Ultimate-Aromatherapy-Diffuser-Essential-Oil/dp/B07JD2GDKN?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Aromatherapy essential oil diffuser for home wellness."
  },
  {
    name: "Aromatherapy Massage Set",
    url: "https://www.amazon.com/Massage-Oil-Kit-Set-Eucalyptus/dp/B0D2XHCYJ5?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Q1Iu4suGL._AC_SL1500_.jpg",
    description: "Aromatherapy massage oil kit for relaxation and stress relief."
  }
];

function HealthWellbeingProducts() {
  const [modalProduct, setModalProduct] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Health & Wellbeing Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {healthProducts.map((product, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition" onClick={() => setModalProduct(product)}>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" onError={e => {e.target.onerror=null; e.target.src='https://placehold.co/400x250?text=No+Image';}} />
            <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={e => {e.stopPropagation(); window.open(product.url, '_blank');}}>Buy on Amazon</button>
          </div>
        ))}
      </div>
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalProduct(null)}>
          <div
            className="rounded-lg shadow-lg max-w-md w-full p-6 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalIn"
            style={{ background: 'rgba(243,243,243,0.85)', backdropFilter: 'blur(16px)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setModalProduct(null)}>&times;</button>
            <img src={modalProduct.image} alt={modalProduct.name} className="w-full rounded mb-4" onError={e => {e.target.onerror=null; e.target.src='https://placehold.co/400x250?text=No+Image';}} />
            <h2 className="text-2xl font-bold mb-2">{modalProduct.name}</h2>
            <p className="text-gray-700 mb-4">{modalProduct.description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full" onClick={() => window.open(modalProduct.url, '_blank')}>Buy on Amazon</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryPlaceholder() {
  const { category } = useParams();
  // Format category name for display
  const displayName = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Category';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{displayName}</h1>
      <p className="text-lg text-gray-600">This page is under construction. Coming soon!</p>
    </div>
  );
}

const HomePageContent = () => {
  const navigate = useNavigate();
  const [modalCard, setModalCard] = useState(null);
  const [marketplaceOpen, setMarketplaceOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);

  const categories = [
    'Electronics',
    'Fashion',
    'Beauty',
    'Health & Wellbeing',
    'Home & Kitchen',
    'Toys & Games',
    'Sports & Outdoors',
    'Automotive',
    'Tools & DIY',
    'Office & Tech',
  ];

  // Use the first 8 categories for the media cards
  const newsCardsData = categories.slice(0, 8).map((cat, i) => ({
    type: 'category',
    image: `https://placehold.co/400x250?text=${encodeURIComponent(cat)}`,
    headline: cat,
    source: '',
    time: '',
    likes: 0,
    comments: 0,
    shares: 0,
  }));

  const newMediaCardsData = [
    {
      type: 'article',
      image: 'https://placehold.co/800x300/4CAF50/FFFFFF?text=New+Section+Card+1',
      headline: 'Sustainable Innovations Driving Future Growth in Tech Sector',
      source: 'GreenTech Daily',
      time: '1h ago',
      likes: 15,
      comments: 5,
      shares: 2,
    },
    {
      type: 'article',
      image: 'https://placehold.co/800x300/2196F3/FFFFFF?text=New+Section+Card+2',
      headline: 'Exploring the Deep Sea: New Discoveries in Marine Biology',
      source: 'Oceanic Explorers',
      time: '3h ago',
      likes: 22,
      comments: 8,
      shares: 4,
    },
    {
      type: 'article',
      image: 'https://placehold.co/400x250/FF9800/FFFFFF?text=New+Section+Card+3',
      headline: 'Culinary Trends: What\'s Hot in the World of Food',
      source: 'Foodie Magazine',
      time: '6h ago',
      likes: 10,
      comments: 3,
      shares: 1,
    },
    {
      type: 'article',
      image: 'https://placehold.co/400x250/9C27B0/FFFFFF?text=New+Section+Card+4',
      headline: 'The Art of Photography: Capturing Moments in Time',
      source: 'Lens Master',
      time: '9h ago',
      likes: 18,
      comments: 7,
      shares: 3,
    },
    {
      type: 'article',
      image: 'https://placehold.co/400x250/F44336/FFFFFF?text=New+Section+Card+5',
      headline: 'Fitness Revolution: New Workouts for a Healthier You',
      source: 'FitLife Daily',
      time: '12h ago',
      likes: 25,
      comments: 10,
      shares: 5,
    },
    {
      type: 'article',
      image: 'https://placehold.co/400x250/607D8B/FFFFFF?text=New+Section+Card+6',
      headline: 'Space Exploration: Missions Beyond Our Solar System',
      source: 'Cosmic News',
      time: '15h ago',
      likes: 30,
      comments: 12,
      shares: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-1 ml-2"> {/* Reduced space-x-2 to space-x-1 for closer spacing */}
          {/* World/Globe SVG Icon */}
          <span className="h-8 w-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-black">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="#fff" />
              <path stroke="currentColor" strokeWidth="1.5" d="M2 12h20M12 2c2.5 3.5 2.5 16.5 0 20M12 2c-2.5 3.5-2.5 16.5 0 20" />
            </svg>
          </span>
          <span className="font-bold text-xl text-black">1MarketLive®</span> {/* Removed space between 1 and MarketLive */}
        </div>
        <div className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-600">Solutions</a>
          <div className="relative group">
            <button className="hover:text-blue-600 focus:outline-none">Marketplace</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              <ul className="py-2">
                {categories.map((cat, idx) => (
                  <li key={cat}>
                    <Link
                      to={`/category/${cat.toLowerCase().replace(/\s|&/g, '-')}`}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-blue-600 focus:outline-none">Finance</button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
              <ul className="py-2">
                {[
                  { name: 'Stocks', route: '/stocks' },
                  { name: 'Currencies', route: '/currencies' },
                  { name: 'Markets', route: '/markets' },
                  { name: 'Crypto', route: '/crypto' },
                  { name: 'Portfolio', route: '/portfolio' },
                  { name: 'Performance', route: '/performance' },
                  { name: 'Analysis', route: '/analysis' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.route}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#" className="hover:text-blue-600">About</a>
          <button className="hover:text-blue-600 p-1" aria-label="Account" onClick={() => navigate('/login')}>
            <User size={18} />
          </button>
          <button className="hover:text-blue-600 p-1" aria-label="Search">
            <Search size={18} />
          </button>
        </div>
      </nav>

      {/* Full-width Video Hero/Header Section */}
      <div className="w-full bg-black relative">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your hero video URL
          className="w-full h-[400px] md:h-[600px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            Featured Content
          </h1>
        </div>
      </div>

      {/* Full-width 4-Card Row with Modal Expand */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0 mt-8">
        {newsCardsData.map((card, i) => (
          <div
            key={i}
            className="relative rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer h-72 flex flex-col justify-end"
            onClick={() => setModalCard(card)}
          >
            {card.type === 'video' ? (
              <video src={card.video} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted />
            ) : (
              <img
                src={card.image}
                alt={card.headline}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/CCCCCC/555555?text=Image+Error"; }}
              />
            )}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative p-4 text-white z-10">
              <h3 className="text-lg font-bold mb-2 leading-snug">{card.headline}</h3>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center space-x-1">
                  {card.source && <span className="font-medium">{card.source}</span>}
                  {card.time && <span className="text-gray-400">• {card.time}</span>}
                  {card.type === 'sponsored' && <span className="text-blue-300 ml-1">Sponsored</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Expanded Card */}
      {modalCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalCard(null)}>
          <div
            className="rounded-lg shadow-lg max-w-2xl w-full p-6 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalIn"
            style={{ background: 'rgba(243,243,243,0.85)', backdropFilter: 'blur(16px)' }}
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl" onClick={() => setModalCard(null)}>&times;</button>
            {modalCard.type === 'video' ? (
              <video src={modalCard.video} className="w-full rounded mb-4" controls autoPlay />
            ) : (
              <img src={modalCard.image} alt={modalCard.headline} className="w-full rounded mb-4" />
            )}
            <h2 className="text-2xl font-bold mb-2">{modalCard.headline}</h2>
            <p className="text-gray-700 mb-2">{modalCard.description || ''}</p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              {modalCard.source && <span>{modalCard.source}</span>}
              {modalCard.time && <span>• {modalCard.time}</span>}
            </div>
          </div>
        </div>
      )}

      {/* More Top Stories Section */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 px-4">More Top Stories</h2>
        {/* First row: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 px-0">
          {newMediaCardsData.slice(0, 2).map((card, i) => (
            <div key={i} className="relative rounded-lg shadow-md overflow-hidden border border-gray-200 h-64 cursor-pointer flex flex-col justify-end">
              <img
                src={card.image}
                alt={card.headline}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x300/CCCCCC/555555?text=Image+Error'; }}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-2 leading-snug">{card.headline}</h3>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center space-x-1">
                    {card.source && <span className="font-medium">{card.source}</span>}
                    {card.time && <span className="text-gray-400">• {card.time}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Second row: 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0">
          {newMediaCardsData.slice(2, 6).map((card, i) => (
            <div key={i} className="relative rounded-lg shadow-md overflow-hidden border border-gray-200 h-48 cursor-pointer flex flex-col justify-end">
              <img
                src={card.image}
                alt={card.headline}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x250/CCCCCC/555555?text=Image+Error'; }}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative p-4 text-white z-10">
                <h3 className="text-lg font-bold mb-2 leading-snug">{card.headline}</h3>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center space-x-1">
                    {card.source && <span className="font-medium">{card.source}</span>}
                    {card.time && <span className="text-gray-400">• {card.time}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Company Footer */}
      <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 pt-10 pb-4 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-2">
              <span className="font-bold text-xl text-purple-400">MLN</span>
            </div>
            <p className="text-sm mb-4">Smart Finance Starts Here. Discover the best products, news, and tools for your financial journey.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Deals</a></li>
              <li><a href="#" className="hover:underline">AI Tools</a></li>
              <li><a href="#" className="hover:underline">Solutions</a></li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Tech</a></li>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Fashion</a></li>
              <li><a href="#" className="hover:underline">Coupons</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="mailto:hello@mln.app" className="hover:underline">hello@mln.app</a></li>
              <li><a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>&copy; {new Date().getFullYear()} MLN. All rights reserved. Smart Finance Starts Here.</div>
        </div>
      </footer>

      {/* Footer Section */}
      <div className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 flex flex-wrap justify-between items-center text-gray-500 text-xs">
          <p>© 2025 MLN</p>
          <div className="flex space-x-3 md:space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy & Cookies</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Advertise</a>
            <a href="#" className="hover://www.google.com/search?q=Advertise&oq=Advertise&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIMzU4OWowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Advertise</a>
            <a href="#" className="hover:underline">Data Providers</a>
            <div className="flex items-center cursor-pointer hover:underline">
              <img src="https://placehold.co/16x16/E0E0E0/555555?text=FB" alt="Feedback Icon" className="mr-1" />
              Feedback
            </div>
          </div>
      </div>
      <style jsx>{`
@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-modalIn {
  animation: modalIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
}
`}</style>
    </div>
  );
};

export { HealthWellbeingProducts, CategoryPlaceholder };
export default HomePageContent; 