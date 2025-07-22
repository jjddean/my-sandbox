// --- BASH COMMANDS FOR DEVELOPMENT & DEPLOYMENT ---
//
// 1.  INITIAL SETUP (Run these once after cloning/creating the project):
//     - Install project dependencies:
//       npm install
//     - Install icon library (if not already installed):
//       npm install lucide-react
//     - Install routing library:
//       npm install react-router-dom
//
// 2.  LOCAL DEVELOPMENT (Run to start your app locally):
//     - Start the development server:
//       npm run dev
//
// 3.  BUILD FOR PRODUCTION (Run before deploying):
//     - Compile and optimize your React app:
//       npm run build
//
// 4.  DEPLOYMENT (Using Vercel):
//     - Ensure you have Vercel CLI installed globally: npm install -g vercel
//     - Log in to Vercel: vercel login
//     - Deploy your built application (run this from your project's root directory):
//       vercel deploy
//     - Follow Vercel's prompts (e.g., link to existing project, deploy to production).
//       Your app will be live on a v0.dev or vercel.app domain.
//
// --- Tailwind CSS CDN Setup (Alternative to local config if issues persist) ---
// If local Tailwind setup (tailwind.config.js, postcss.config.js, @tailwind directives)
// is not working, you can use the CDN by:
// 1. Deleting tailwind.config.js and postcss.config.js
// 2. Ensuring src/index.css is empty.
// 3. Adding <script src="https://cdn.tailwindcss.com"></script> to your public/index.html <head> section.
// ---------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; // Import routing hooks and components
import { Search, Bell, Settings, ChevronDown, ChevronRight, Star, Plus, Menu, LayoutDashboard, TrendingUp, BarChart, DollarSign, Globe, Briefcase, Activity, LineChart, SlidersHorizontal, Cloud, Newspaper, ShoppingCart, Sun, CloudRain, Wind, Droplet, Thermometer, Eye, Gauge, Sunrise, Sunset } from 'lucide-react'; // All necessary icons
import HomePageContent from './HomePageContent';

// --- PAGE COMPONENTS ---

// DashboardPageContent
const DashboardPageContent = () => {
  // (Paste your full DashboardPageContent code here)
  return <div className="p-6 text-center text-gray-500">Dashboard Content Here</div>;
};

// StocksPageContent
const StocksPageContent = () => {
  // (Paste your full StocksPageContent code here)
  return <div className="p-6 text-center text-gray-500">Stocks Content Here</div>;
};

// MarketsPageContent
const MarketsPageContent = () => {
  // (Paste your full MarketsPageContent code here)
  return <div className="p-6 text-center text-gray-500">Markets Content Here</div>;
};

// CurrenciesPageContent
const CurrenciesPageContent = () => {
  // (Paste your full CurrenciesPageContent code here)
  return <div className="p-6 text-center text-gray-500">Currencies Content Here</div>;
};

// CryptoPageContent
const CryptoPageContent = () => {
  // (Paste your full CryptoPageContent code here)
  return <div className="p-6 text-center text-gray-500">Crypto Content Here</div>;
};

// PortfolioPageContent
const PortfolioPageContent = () => {
  // (Paste your full PortfolioPageContent code here)
  return <div className="p-6 text-center text-gray-500">Portfolio Content Here</div>;
};

// PerformancePageContent
const PerformancePageContent = () => {
  // (Paste your full PerformancePageContent code here)
  return <div className="p-6 text-center text-gray-500">Performance Content Here</div>;
};

// AnalysisPageContent
const AnalysisPageContent = () => {
  // (Paste your full AnalysisPageContent code here)
  return <div className="p-6 text-center text-gray-500">Analysis Content Here</div>;
};

// HeadlinesPageContent
const HeadlinesPageContent = () => {
  return <div className="p-6 text-center text-gray-500">Headlines Content Here</div>;
};

// WeatherPageContent
const WeatherPageContent = () => {
  // (Paste your full WeatherPageContent code here)
  return <div className="p-6 text-center text-gray-500">Weather Content Here</div>;
};

// ShoppingPageContent
const ShoppingPageContent = () => {
  return <div className="p-6 text-center text-gray-500">Shopping Content Here</div>;
};

// ExplorePageContent
const ExplorePageContent = () => {
  // (Paste your full ExplorePageContent code here)
  return <div className="p-6 text-center text-gray-500">Explore & Invest Content Here</div>;
};

// --- Component: Sidebar ---
// This component now only handles its internal rendering and state based on props
const Sidebar = ({ isOpen, toggleSidebar, activePage, setActivePage }) => {
  const navigate = useNavigate(); // Hook to change routes

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, id: 'dashboard', path: '/' }, // Default path for Dashboard
    { name: 'Stocks', icon: <TrendingUp size={20} />, id: 'stocks', path: '/stocks' },
    { name: 'Markets', icon: <BarChart size={20} />, id: 'markets', path: '/markets' },
    { name: 'Currencies', icon: <DollarSign size={20} />, id: 'currencies', path: '/currencies' },
    { name: 'Crypto', icon: <Globe size={20} />, id: 'crypto', path: '/crypto' },
    { name: 'Portfolio', icon: <Briefcase size={20} />, id: 'portfolio', path: '/portfolio' },
    { name: 'Performance', icon: <Activity size={20} />, id: 'performance', path: '/performance' },
    { name: 'Analysis', icon: <LineChart size={20} />, id: 'analysis', path: '/analysis' },
    { name: 'Headlines', icon: <Newspaper size={20} />, id: 'headlines', path: '/dashboard' }, // News button now goes to dashboard
    { name: 'Explore & Invest', icon: <SlidersHorizontal size={20} />, id: 'explore', path: '/explore' },
    { name: 'Weather', icon: <Cloud size={20} />, id: 'weather', path: '/weather' },
    { name: 'Shopping', icon: <ShoppingCart size={20} />, id: 'shopping', path: '/shopping' },
  ];

  return (
    <> {/* Removed the outer div here, as its positioning is now handled by MainAppLayout */}
      <div className="flex justify-between items-center mb-6">
        {isOpen && <h2 className="text-xl font-bold">MLN</h2>}
        <button onClick={toggleSidebar} className={`text-gray-400 hover:text-white ${isOpen ? '' : 'mx-auto'}`}>
          <Menu size={24} />
        </button>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a
                href="#" // Keep href for accessibility, but onClick handles navigation
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  navigate(item.path); // Navigate to the path
                  setActivePage(item.id); // Update active state
                  if (window.innerWidth < 768) toggleSidebar(); // Close sidebar on mobile after click
                }}
                className={`flex items-center p-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap
                           ${activePage === item.id ? 'bg-blue-600' : 'text-gray-300'}`}
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

// --- Main App Component ---
const MainAppLayout = () => { // Renamed App to MainAppLayout
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate(); // Hook to change routes
    const location = useLocation(); // Hook to get current URL location

    // Set active page based on current URL path
    const getActivePageFromPath = (path) => {
        const pathSegments = path.split('/').filter(Boolean); // Split by / and remove empty strings
        if (pathSegments.length === 0) return 'dashboard'; // Default to dashboard if path is just /
        return pathSegments[0]; // Use the first segment as the page ID
    };

    const [activePage, setActivePage] = useState(getActivePageFromPath(location.pathname));

    // Update activePage state when URL changes
    useEffect(() => {
        setActivePage(getActivePageFromPath(location.pathname));
    }, [location.pathname]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800"> {/* Removed flex-col and grid from here */}
            {/* Sidebar */}
            <div className={`
                bg-gray-900 text-white p-4 transition-all duration-300 ease-in-out z-40
                ${isSidebarOpen ? 'w-64' : 'w-16'}
                h-screen
                fixed top-0 left-0
            `}>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} activePage={activePage} setActivePage={setActivePage} />
            </div>

            {/* Main Content Wrapper */}
            <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out overflow-x-hidden ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}> {/* Removed flex-1 */}
                {/* Top Navigation Bar (Header - always full width) */}
                <nav className="bg-white border-b border-gray-200 py-2 px-4 md:px-6 flex items-center justify-between z-30">
                    {/* Left Section: MLN Logo and Search */}
                    <div className="flex items-center space-x-4">
                        <button onClick={toggleSidebar} className="md:hidden text-gray-600 hover:text-gray-900 mr-2">
                            <Menu size={24} />
                        </button>
                        <img
                            src="https://placehold.co/24x24/0078D4/FFFFFF?text=M"
                            alt="MLN Icon"
                            className="h-6 w-auto cursor-pointer"
                            onClick={() => navigate('/')} // Navigate to home page on click
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/CCCCCC/555555?text=Icon"; }}
                        />
                        <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600 w-64 md:w-96">
                            <Search size={16} className="mr-2 text-gray-500" />
                            <span>Search MLN...</span>
                        </div>
                    </div>

                    {/* Right Section: Top Bar Navigation Links and Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Top Bar Navigation Links */}
                        <a href="#" onClick={() => navigate('/weather')} className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                            <Cloud size={16} className="mr-1" /> Weather
                        </a>
                        <a href="#" onClick={() => navigate('/dashboard')} className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                            <Newspaper size={16} className="mr-1" /> Headlines
                        </a>
                        <a href="#" onClick={() => navigate('/shopping')} className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                            <ShoppingCart size={16} className="mr-1" /> Shopping
                        </a>
                        {/* Original Icons */}
                        <Bell size={18} className="text-gray-700 hover:text-blue-600 cursor-pointer" />
                        <Settings size={18} className="text-gray-700 hover:text-blue-600 cursor-pointer" />
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            JD
                        </div>
                    </div>
                </nav>

                {/* Sub-Navigation / Market Data Bar */}
                <div className="bg-white border-b border-gray-200 py-2 px-4 md:px-6 flex items-center justify-between text-xs overflow-x-auto whitespace-nowrap">
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-1">FTSE 100</span>
                            <span className="text-green-600">+0.20%</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-1">S&P 500</span>
                            <span className="text-red-600">-0.15%</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-600 mr-1">US 10Y</span>
                            <span className="text-green-600">+0.01%</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span>Market Data</span>
                            <ChevronDown size={12} className="ml-1" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-auto">
                        <div className="flex items-center bg-blue-50 border border-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                            <Star size={12} className="mr-1" />
                            Watchlist
                        </div>
                        <div className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer px-2 py-1 rounded-full text-xs font-medium">
                            <Plus size={12} className="mr-1" />
                            New Watchlist
                        </div>
                    </div>
                </div>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<HomePageContent />} />
                        <Route path="/dashboard" element={<DashboardPageContent />} />
                        <Route path="/stocks" element={<StocksPageContent />} />
                        <Route path="/markets" element={<MarketsPageContent />} />
                        <Route path="/currencies" element={<CurrenciesPageContent />} />
                        <Route path="/crypto" element={<CryptoPageContent />} />
                        <Route path="/portfolio" element={<PortfolioPageContent />} />
                        <Route path="/performance" element={<PerformancePageContent />} />
                        <Route path="/analysis" element={<AnalysisPageContent />} />
                        <Route path="/headlines" element={<HeadlinesPageContent />} />
                        <Route path="/weather" element={<WeatherPageContent />} />
                        <Route path="/shopping" element={<ShoppingPageContent />} />
                        <Route path="/explore" element={<ExplorePageContent />} />
                        {/* Add a fallback route for unmatched paths */}
                        <Route path="*" element={<HomePageContent />} />
                    </Routes>
                </main>

                {/* Footer */}
                <div className="bg-white border-t border-gray-200 py-4 px-4 md:px-6 flex flex-wrap justify-between items-center text-gray-500 text-xs">
                    <p>© 2025 MLN</p>
                    <div className="flex space-x-3 md:space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Privacy & Cookies</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Advertise</a>
                        <a href="#" className="hover:underline">Data Providers</a>
                        <div className="flex items-center cursor-pointer hover:underline">
                            <img src="https://placehold.co/16x16/E0E0E0/555555?text=FB" alt="Feedback Icon" className="mr-1" />
                            Feedback
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// The actual App component that main.jsx renders
// This component simply wraps MainAppLayout inside a Router context
export default function App() {
    return <MainAppLayout />;
}