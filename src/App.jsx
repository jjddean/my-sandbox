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
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'; // Import routing hooks and components
import { Search, Bell, Settings, ChevronDown, ChevronRight, Star, Plus, Menu, LayoutDashboard, TrendingUp, BarChart, DollarSign, Globe, Briefcase, Activity, LineChart, SlidersHorizontal, Cloud, Newspaper, ShoppingCart, Sun, CloudRain, Wind, Droplet, Thermometer, Eye, Gauge, Sunrise, Sunset } from 'lucide-react'; // All necessary icons
import HomePageContent from './HomePageContent';
// Import HealthWellbeingProducts from HomePageContent
import {
  CategoryPlaceholder,
  BeautyProducts,
  ElectronicsProducts,
  FashionProducts,
  HomeKitchenProducts,
  SportsOutdoorsProducts,
  BooksMediaProducts,
  ToysGamesProducts,
  AutomotiveProducts,
  HealthWellbeingProducts,
  AIToolsProducts
} from './HomePageContent';
import ProductDetailPage from './ProductDetailPage';
import CategoriesPageContent from './CategoriesPageContent';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';

// --- PRODUCT PAGE COMPONENTS ---

// MacBook Air M2 Product Page
const MacBookAirM2Page = () => {
  const macbookProduct = {
    name: "MacBook Air M2",
    url: "https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-30%E2%80%91core/dp/B0B3C5T6M8?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "Ultra-thin laptop with M2 chip, all-day battery life, and stunning Retina display.",
    price: 1099.99,
    currency: 'USD',
    rating: 4.9,
    reviews: 892,
    category: "Laptops",
    brand: "Apple",
    availability: "In Stock",
    shipping: "Free Shipping",
    features: [
      "Apple M2 chip with 8-core CPU and up to 10-core GPU",
      "13.6-inch Liquid Retina display with 500 nits brightness",
      "Up to 18 hours of battery life",
      "1080p FaceTime HD camera with advanced image signal processor",
      "Four-speaker sound system with Spatial Audio",
      "MagSafe 3 charging port, two Thunderbolt ports, and headphone jack",
      "Backlit Magic Keyboard and Touch ID",
      "Fanless design for silent operation",
      "8GB unified memory, configurable to 16GB or 24GB",
      "256GB SSD storage, configurable up to 2TB"
    ],
    specifications: {
      "Processor": "Apple M2 chip with 8-core CPU",
      "Graphics": "8-core GPU (base) or 10-core GPU",
      "Memory": "8GB unified memory",
      "Storage": "256GB SSD",
      "Display": "13.6-inch Liquid Retina",
      "Resolution": "2560 x 1664 pixels",
      "Weight": "2.7 pounds (1.24 kg)",
      "Dimensions": "11.97 x 8.46 x 0.44 inches",
      "Battery": "Up to 18 hours video playback",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.0",
      "Ports": "2x Thunderbolt, MagSafe 3, 3.5mm headphone",
      "Operating System": "macOS Ventura"
    }
  };

  return <ProductDetailPage product={macbookProduct} />;
};

// iPhone 15 Pro Max Product Page
const IPhoneProMaxPage = () => {
  const iphoneProduct = {
    name: "iPhone 15 Pro Max",
    url: "https://www.amazon.com/Apple-iPhone-15-Pro-Max/dp/B0CM5J8HQQ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
    price: 1199.99,
    currency: 'USD',
    rating: 4.8,
    reviews: 1247,
    category: "Smartphones",
    brand: "Apple",
    availability: "In Stock",
    shipping: "Free Shipping",
    features: [
      "A17 Pro chip with 6-core GPU for incredible performance",
      "6.7-inch Super Retina XDR display with ProMotion",
      "Titanium design with textured matte glass back",
      "Pro camera system with 48MP Main, Ultra Wide, and Telephoto",
      "5x Telephoto zoom and 2x Telephoto (48MP Main)",
      "Action Button for quick access to favorite features",
      "USB-C connector with USB 3 for faster transfer speeds",
      "Face ID for secure authentication",
      "Up to 29 hours video playback",
      "Emergency SOS via satellite and Crash Detection"
    ],
    specifications: {
      "Processor": "A17 Pro chip with 6-core CPU",
      "Graphics": "6-core GPU with hardware-accelerated ray tracing",
      "Memory": "8GB RAM",
      "Storage": "256GB, 512GB, or 1TB",
      "Display": "6.7-inch Super Retina XDR OLED",
      "Resolution": "2796 x 1290 pixels at 460 ppi",
      "Weight": "7.81 ounces (221 grams)",
      "Dimensions": "6.29 x 3.02 x 0.32 inches",
      "Battery": "Up to 29 hours video playback",
      "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
      "Connectivity": "5G, Wi-Fi 6E, Bluetooth 5.3",
      "Operating System": "iOS 17"
    }
  };

  return <ProductDetailPage product={iphoneProduct} />;
};

// Samsung Galaxy S24 Ultra Product Page
const SamsungGalaxyPage = () => {
  const samsungProduct = {
    name: "Samsung Galaxy S24 Ultra",
    url: "https://www.amazon.com/Samsung-Electronics-Unlocked-Smartphone-Titanium/dp/B0CSJZ8Q8L?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Premium Android flagship with S Pen, advanced AI features, and titanium frame.",
    price: 1299.99,
    currency: 'USD',
    rating: 4.7,
    reviews: 567,
    category: "Smartphones",
    brand: "Samsung",
    availability: "In Stock",
    shipping: "Free Shipping",
    features: [
      "Snapdragon 8 Gen 3 for Galaxy processor",
      "6.8-inch Dynamic AMOLED 2X display with 120Hz",
      "Titanium frame with Gorilla Glass Victus 2",
      "200MP main camera with advanced AI photography",
      "Built-in S Pen with Air Actions and precision control",
      "12GB RAM with 256GB/512GB/1TB storage options",
      "5000mAh battery with 45W fast charging",
      "Galaxy AI features for enhanced productivity",
      "IP68 water and dust resistance",
      "Wireless PowerShare and wireless charging"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Graphics": "Adreno 750 GPU",
      "Memory": "12GB RAM",
      "Storage": "256GB/512GB/1TB UFS 4.0",
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Resolution": "3120 x 1440 pixels (QHD+)",
      "Weight": "8.22 ounces (233 grams)",
      "Dimensions": "6.40 x 3.11 x 0.34 inches",
      "Battery": "5000mAh with 45W fast charging",
      "Camera": "200MP Main, 50MP Periscope, 12MP Ultra Wide, 10MP Telephoto",
      "Connectivity": "5G, Wi-Fi 7, Bluetooth 5.3",
      "Operating System": "Android 14 with One UI 6.1"
    }
  };

  return <ProductDetailPage product={samsungProduct} />;
};

// --- PAGE COMPONENTS ---

// DashboardPageContent
const DashboardPageContent = () => {
  const [timeframe, setTimeframe] = useState('1D');
  const [selectedMetric, setSelectedMetric] = useState('portfolio');

  const metrics = [
    { name: 'Portfolio Value', value: '$124,567.89', change: '+2.34%', positive: true },
    { name: 'Daily P&L', value: '$2,847.12', change: '+1.87%', positive: true },
    { name: 'Total Return', value: '$18,432.45', change: '+14.2%', positive: true },
    { name: 'Cash Balance', value: '$12,345.67', change: '0.00%', positive: true },
  ];

  const watchlist = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 2.34, percent: 1.25 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: -1.23, percent: -0.32 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 0.89, percent: 0.63 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.94, change: 3.45, percent: 2.32 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: -5.67, percent: -2.23 },
  ];

  const recentActivity = [
    { action: 'Bought', symbol: 'AAPL', shares: 10, price: 189.84, time: '2 hours ago' },
    { action: 'Sold', symbol: 'MSFT', shares: 5, price: 378.85, time: '4 hours ago' },
    { action: 'Bought', symbol: 'GOOGL', shares: 15, price: 142.56, time: '1 day ago' },
    { action: 'Dividend', symbol: 'JNJ', amount: 45.67, time: '2 days ago' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your financial overview.</p>
        </div>
        <div className="flex space-x-2">
          <select 
            value={timeframe} 
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="1D">1D</option>
            <option value="1W">1W</option>
            <option value="1M">1M</option>
            <option value="3M">3M</option>
            <option value="1Y">1Y</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            Refresh
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`text-sm font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Portfolio Performance</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedMetric('portfolio')}
                className={`px-3 py-1 text-sm rounded ${selectedMetric === 'portfolio' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => setSelectedMetric('benchmark')}
                className={`px-3 py-1 text-sm rounded ${selectedMetric === 'benchmark' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
              >
                S&P 500
              </button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart size={48} className="mx-auto mb-2" />
              <p>Chart visualization would go here</p>
              <p className="text-sm">Portfolio vs Benchmark comparison</p>
            </div>
          </div>
        </div>

        {/* Watchlist */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Watchlist</h2>
            <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-3">
            {watchlist.map((stock, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <div className="font-medium text-gray-900">{stock.symbol}</div>
                  <div className="text-sm text-gray-600">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900">${stock.price}</div>
                  <div className={`text-sm ${stock.percent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.percent >= 0 ? '+' : ''}{stock.change} ({stock.percent >= 0 ? '+' : ''}{stock.percent}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${activity.action === 'Bought' ? 'bg-green-500' : activity.action === 'Sold' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                <div>
                  <div className="font-medium text-gray-900">
                    {activity.action} {activity.shares && `${activity.shares} shares of`} {activity.symbol}
                  </div>
                  <div className="text-sm text-gray-600">{activity.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-900">
                  {activity.price ? `$${activity.price}` : `$${activity.amount}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// StocksPageContent
const StocksPageContent = () => {
  const topStocksData = [
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '$957.03', change: '+2.77%', volume: '42.64M', cap: '$2.34T' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$405.24', change: '+1.58%', volume: '22.15M', cap: '$2.99T' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$179.94', change: '+0.63%', volume: '27.19M', cap: '$1.87T' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$185.23', change: '-0.44%', volume: '58.39M', cap: '$2.92T' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$156.71', change: '-1.18%', volume: '$18.73M', cap: '$1.98T' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '$175.50', change: '-1.53%', volume: '65.12M', cap: '$550.2B' },
  ];

  const trendingStocks = [
    { symbol: 'AMC', name: 'AMC Entertainment', change: '+15.2%', reason: 'Short Squeeze' },
    { symbol: 'GME', name: 'GameStop Corp.', change: '+10.5%', reason: 'Retail Investor Interest' },
    { symbol: 'PLTR', name: 'Palantir Technologies', change: '+7.8%', reason: 'New Government Contract' },
    { symbol: 'RIVN', name: 'Rivian Automotive', change: '-5.1%', reason: 'Production Miss' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Stocks Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Stocks Overview</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Stocks</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Trending
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Top Gainers
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Top Losers
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Most Active
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            By Sector
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            By Industry
          </button>
        </div>

        {/* Top Stocks Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Top Market Cap Stocks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {topStocksData.map((stock, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{stock.symbol}</span>
                  <span className={`${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                    {stock.change}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">{stock.price}</div>
                <div className="text-xs text-gray-500">{stock.name}</div>
                <div className="text-xs text-gray-500">Vol: {stock.volume} | Cap: {stock.cap}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Stocks Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Trending Stocks</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Change</th>
                  <th className="py-3 px-4">Reason</th>
                </tr>
              </thead>
              <tbody>
                {trendingStocks.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.symbol}</td>
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className={`py-3 px-4 ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              See all trending <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Placeholder for Stock Charts or News */}
        <div className="h-48 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm mb-4">
          Stock Charts / Detailed News Placeholder
        </div>

      </div>
    </div>
  );
};


// MarketsPageContent
const MarketsPageContent = () => {
  const marketIndices = [
    { name: 'S&P 500', symbol: 'SPX', value: '4,783.35', change: '+12.45', changePct: '+0.26%', volume: '3.2B' },
    { name: 'NASDAQ', symbol: 'IXIC', value: '15,003.22', change: '-23.67', changePct: '-0.16%', volume: '4.1B' },
    { name: 'Dow Jones', symbol: 'DJI', value: '37,592.98', change: '+45.23', changePct: '+0.12%', volume: '285M' },
    { name: 'Russell 2000', symbol: 'RUT', value: '2,045.67', change: '+8.92', changePct: '+0.44%', volume: '1.8B' },
  ];

  const topCompanies = [
    { name: 'Apple Inc.', symbol: 'AAPL', price: '$185.23', change: '-0.44%', marketCap: '$2.92T', sector: 'Technology' },
    { name: 'Microsoft Corp.', symbol: 'MSFT', price: '$405.24', change: '+1.58%', marketCap: '$2.99T', sector: 'Technology' },
    { name: 'NVIDIA Corp.', symbol: 'NVDA', price: '$957.03', change: '+2.77%', marketCap: '$2.34T', sector: 'Technology' },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: '$179.94', change: '+0.63%', marketCap: '$1.87T', sector: 'Consumer' },
    { name: 'Alphabet Inc.', symbol: 'GOOGL', price: '$156.71', change: '-1.18%', marketCap: '$1.98T', sector: 'Technology' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '$175.50', change: '-1.53%', marketCap: '$550.2B', sector: 'Automotive' },
  ];

  const sectorPerformance = [
    { sector: 'Technology', change: '+1.2%', companies: 'AAPL, MSFT, NVDA' },
    { sector: 'Healthcare', change: '+0.8%', companies: 'JNJ, PFE, UNH' },
    { sector: 'Financial', change: '+0.5%', companies: 'JPM, BAC, WFC' },
    { sector: 'Energy', change: '-0.3%', companies: 'XOM, CVX, COP' },
    { sector: 'Consumer', change: '+0.9%', companies: 'AMZN, TSLA, HD' },
  ];

  const marketNews = [
    { headline: 'Fed signals potential rate cuts amid economic uncertainty', tag: 'Monetary Policy', time: '2h ago' },
    { headline: 'Tech earnings season kicks off with strong guidance', tag: 'Earnings', time: '4h ago' },
    { headline: 'Global supply chain disruptions impact manufacturing', tag: 'Supply Chain', time: '6h ago' },
    { headline: 'ESG investing trends reshape market dynamics', tag: 'ESG', time: '1d ago' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Markets Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Companies & Markets</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Markets</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Overview
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Indices
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Companies
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Sectors
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Global Markets
          </button>
        </div>

        {/* Market Indices Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Major Market Indices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketIndices.map((index, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{index.symbol}</span>
                  <span className={`${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                    {index.changePct}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">{index.value}</div>
                <div className="text-xs text-gray-500">{index.name}</div>
                <div className="text-xs text-gray-500">Vol: {index.volume}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Top Companies by Market Cap</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4 text-right">Price</th>
                  <th className="py-3 px-4 text-right">Change</th>
                  <th className="py-3 px-4 text-right">Market Cap</th>
                  <th className="py-3 px-4">Sector</th>
                </tr>
              </thead>
              <tbody>
                {topCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{company.name}</td>
                    <td className="py-3 px-4 text-blue-600 font-medium">{company.symbol}</td>
                    <td className="py-3 px-4 text-right">{company.price}</td>
                    <td className={`py-3 px-4 text-right ${company.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {company.change}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-700">{company.marketCap}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        {company.sector}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              See all companies <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Sector Performance Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Sector Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectorPerformance.map((sector, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{sector.sector}</span>
                  <span className={`${sector.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                    {sector.change}
                  </span>
                </div>
                <div className="text-xs text-gray-500">Top: {sector.companies}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Chart Placeholder */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Market Overview Chart</h2>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
            Interactive Market Chart Placeholder (e.g., Candlestick, Heatmap)
          </div>
        </section>

        {/* Market News Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Market News</h2>
          <ul className="space-y-4">
            {marketNews.map((news, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{news.headline}</p>
                <p className="text-xs text-gray-600">{news.tag} • {news.time}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// CurrenciesPageContent
const CurrenciesPageContent = () => {
  const majorCurrenciesData = [
    { pair: 'EUR/USD', rate: '1.0850', change: '+0.0025', changePct: '+0.23%', high: '1.0865', low: '1.0820' },
    { pair: 'GBP/USD', rate: '1.2715', change: '-0.0010', changePct: '-0.08%', high: '1.2730', low: '1.2690' },
    { pair: 'USD/JPY', rate: '157.80', change: '+0.15', changePct: '+0.10%', high: '158.00', low: '157.50' },
    { pair: 'USD/CAD', rate: '1.3655', change: '-0.0005', changePct: '-0.04%', high: '1.3670', low: '1.3640' },
    { pair: 'AUD/USD', rate: '0.6650', change: '+0.0008', changePct: '+0.12%', high: '0.6660', low: '0.6635' },
    { pair: 'USD/CHF', rate: '0.8955', change: '-0.0012', changePct: '-0.13%', high: '0.8970', low: '0.8940' },
  ];

  const cryptoCurrenciesData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$65,200', change: '+1.5%', volume: '35.2B' },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,400', change: '+2.1%', volume: '18.7B' },
    { symbol: 'XRP', name: 'Ripple', price: '$0.52', change: '-0.8%', volume: '1.5B' },
  ];

  const currencyNews = [
    { headline: 'ECB hints at further rate cuts amidst inflation concerns', tag: 'EUR/USD', time: '1h ago' },
    { headline: 'Yen weakens as Bank of Japan maintains dovish stance', tag: 'USD/JPY', time: '3h ago' },
    { headline: 'Dollar gains strength on robust US jobs report', tag: 'USD Index', time: '5h ago' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Currencies Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Currencies Overview</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Currencies</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Major Pairs
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Minor Pairs
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Exotic Pairs
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Cryptocurrencies
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Historical Data
          </button>
        </div>

        {/* Major Currency Pairs Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Major Exchange Rates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Pair</th>
                  <th className="py-3 px-4 text-right">Rate</th>
                  <th className="py-3 px-4 text-right">Change</th>
                  <th className="py-3 px-4 text-right">Change %</th>
                  <th className="py-3 px-4 text-right hidden sm:table-cell">High</th>
                  <th className="py-3 px-4 text-right hidden sm:table-cell">Low</th>
                </tr>
              </thead>
              <tbody>
                {majorCurrenciesData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.pair}</td>
                    <td className="py-3 px-4 text-right">{item.rate}</td>
                    <td className={`py-3 px-4 text-right ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </td>
                    <td className={`py-3 px-4 text-right ${item.changePct.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.changePct}
                    </td>
                    <td className="py-3 px-4 text-right hidden sm:table-cell text-gray-700">{item.high}</td>
                    <td className="py-3 px-4 text-right hidden sm:table-cell text-gray-700">{item.low}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              See more pairs <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Cryptocurrencies Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Top Cryptocurrencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoCurrenciesData.map((crypto, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{crypto.symbol}</span>
                  <span className={`${crypto.change.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                    {crypto.change}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">{crypto.price}</div>
                <div className="text-xs text-gray-500">{crypto.name}</div>
                <div className="text-xs text-gray-500">Vol: {crypto.volume}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Currency News Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Currency News</h2>
          <ul className="space-y-4">
            {currencyNews.map((news, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{news.headline}</p>
                <p className="text-xs text-gray-600">{news.tag} • {news.time}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Placeholder for Currency Charts */}
        <div className="h-48 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm mb-4">
          Currency Charts / Analysis Placeholder
        </div>
      </div>
    </div>
  );
};

// CryptoPageContent
const CryptoPageContent = () => {
  const topCryptosData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$65,200.50', change: '+1.53%', marketCap: '$1.28T', volume: '35.2B' },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,400.75', change: '+2.10%', marketCap: '$408.5B', volume: '18.7B' },
    { symbol: 'BNB', name: 'Binance Coin', price: '$590.10', change: '+0.88%', marketCap: '$88.9B', volume: '1.8B' },
    { symbol: 'SOL', name: 'Solana', price: '$145.30', change: '+3.45%', marketCap: '$65.1B', volume: '2.5B' },
    { symbol: 'XRP', name: 'Ripple', price: '$0.52', change: '-0.80%', marketCap: '$28.1B', volume: '1.5B' },
    { symbol: 'ADA', name: 'Cardano', price: '$0.42', change: '-0.15%', marketCap: '$14.9B', volume: '0.5B' },
  ];

  const trendingCryptoNews = [
    { headline: 'Bitcoin Halving Event Expected to Drive Price Volatility', tag: 'BTC Market Analysis', time: '2h ago' },
    { headline: 'Ethereum Upgrade Promises Faster Transactions and Lower Fees', tag: 'ETH Blockchain News', time: '5h ago' },
    { headline: 'New DeFi Protocol Launches with High Staking Rewards', tag: 'DeFi Innovation', time: '8h ago' },
    { headline: 'NFT Market Sees Resurgence in Collectible Sales', tag: 'NFT Trends', time: '10h ago' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Cryptocurrencies Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Cryptocurrencies Overview</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Cryptos</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Top Cryptos
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            DeFi
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            NFTs
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Exchanges
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Blockchain
          </button>
        </div>

        {/* Top Cryptocurrencies Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Top Cryptocurrencies by Market Cap</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4 text-right">Price</th>
                  <th className="py-3 px-4 text-right">Change %</th>
                  <th className="py-3 px-4 text-right hidden sm:table-cell">Market Cap</th>
                  <th className="py-3 px-4 text-right hidden sm:table-cell">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {topCryptosData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.symbol}</td>
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-right">{item.price}</td>
                    <td className={`py-3 px-4 text-right ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </td>
                    <td className="py-3 px-4 text-right hidden sm:table-cell text-gray-700">{item.marketCap}</td>
                    <td className="py-3 px-4 text-right hidden sm:table-cell text-gray-700">{item.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              See more cryptos <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Trending Crypto News Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Trending Crypto News</h2>
          <ul className="space-y-4">
            {trendingCryptoNews.map((news, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{news.headline}</p>
                <p className="text-xs text-gray-600">{news.tag} • {news.time}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Placeholder for Crypto Charts / Analysis */}
        <div className="h-48 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm mb-4">
          Crypto Charts / Analysis Placeholder
        </div>
      </div>
    </div>
  );
};

// PortfolioPageContent
const PortfolioPageContent = () => {
  const portfolioHoldingsData = [
    { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, avgCost: 170.00, lastPrice: 185.23, marketValue: 1852.30, gainLoss: '+152.30', gainLossPct: '+8.96%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 5, avgCost: 390.00, lastPrice: 405.24, marketValue: 2026.20, gainLoss: '+76.20', gainLossPct: '+3.91%' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', quantity: 2, avgCost: 900.00, lastPrice: 957.03, marketValue: 1914.06, gainLoss: '+114.06', gainLossPct: '+6.34%' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 8, avgCost: 160.00, lastPrice: 156.71, marketValue: 1253.68, gainLoss: '-3.29', gainLossPct: '-2.06%' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', quantity: 7, avgCost: 180.00, lastPrice: 179.94, marketValue: 1259.58, gainLoss: '-0.06', gainLossPct: '-0.03%' },
  ];

  const portfolioSummary = {
    totalMarketValue: '$8,305.82',
    totalGainLoss: '+$339.20',
    totalGainLossPct: '+4.26%',
    cashBalance: '$1,500.00',
  };

  const portfolioNews = [
    { headline: 'Tech Sector Outlook: What\'s Next for Big Tech Stocks?', tag: 'AAPL MSFT NVDA', time: '1h ago' },
    { headline: 'Market Volatility Expected Ahead of Fed Meeting', tag: 'Market Outlook', time: '3h ago' },
    { headline: 'Consumer Spending Trends Impacting Retail Sector', tag: 'AMZN', time: '5h ago' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Portfolio Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">My Portfolio</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Accounts</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Overview
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Holdings
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Performance
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Transactions
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Allocation
          </button>
        </div>

        {/* Portfolio Summary Section */}
        <section className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Market Value</div>
            <div className="text-xl font-bold text-gray-900">{portfolioSummary.totalMarketValue}</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Gain/Loss</div>
            <div className={`${portfolioSummary.totalGainLoss.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-xl font-bold`}>
              {portfolioSummary.totalGainLoss} ({portfolioSummary.totalGainLossPct})
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Cash Balance</div>
            <div className="text-xl font-bold text-gray-900">{portfolioSummary.cashBalance}</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm flex items-center justify-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
                  Add New Holding
              </button>
          </div>
        </section>

        {/* Portfolio Holdings Table */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">My Holdings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4 text-right">Qty</th>
                  <th className="py-3 px-4 text-right">Avg Cost</th>
                  <th className="py-3 px-4 text-right">Last Price</th>
                  <th className="py-3 px-4 text-right">Market Value</th>
                  <th className="py-3 px-4 text-right">Gain/Loss</th>
                  <th className="py-3 px-4 text-right">Gain/Loss %</th>
                </tr>
              </thead>
              <tbody>
                {portfolioHoldingsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.symbol}</td>
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-right">{item.quantity}</td>
                    <td className="py-3 px-4 text-right">${item.avgCost.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">${item.lastPrice.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">${item.marketValue.toFixed(2)}</td>
                    <td className={`py-3 px-4 text-right ${item.gainLoss.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.gainLoss}
                    </td>
                    <td className={`py-3 px-4 text-right ${item.gainLossPct.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.gainLossPct}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              View all holdings <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Portfolio Performance Chart Placeholder */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Portfolio Performance</h2>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
            Portfolio Performance Chart Placeholder (e.g., Line Chart)
          </div>
        </section>

        {/* Portfolio News & Insights Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Portfolio News & Insights</h2>
          <ul className="space-y-4">
            {portfolioNews.map((news, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{news.headline}</p>
                <p className="text-xs text-gray-600">{news.tag} • {news.time}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// PerformancePageContent
const PerformancePageContent = () => {
  const performanceSummary = {
    totalReturn: '+15.25%',
    annualizedReturn: '+10.50%',
    totalGainLoss: '+$1,250.00',
    portfolioValue: '$10,500.00',
    benchmarkComparison: '+2.10%', // e.g., vs S&P 500
  };

  const keyMetrics = [
    { metric: 'Sharpe Ratio', value: '1.20', description: 'Risk-adjusted return' },
    { metric: 'Volatility (Std Dev)', value: '18.5%', description: 'Measure of price fluctuation' },
    { metric: 'Beta', value: '1.15', description: 'Sensitivity to market movements' },
    { metric: 'Alpha', value: '0.5%', description: 'Excess return vs. benchmark' },
  ];

  const performanceNews = [
    { headline: 'Market rally boosts portfolio returns across sectors', tag: 'Performance Review', time: '1d ago' },
    { headline: 'Inflation concerns impact bond market performance', tag: 'Fixed Income', time: '2d ago' },
    { headline: 'Tech stocks lead the gains in Q2 earnings reports', tag: 'Sector Analysis', time: '3d ago' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Performance Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Performance</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Portfolios</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Overview
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Returns
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Risk
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Attribution
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Tax Impact
          </button>
        </div>

        {/* Performance Summary Section */}
        <section className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Return</div>
            <div className={`${performanceSummary.totalReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-xl font-bold`}>
              {performanceSummary.totalReturn}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Annualized Return</div>
            <div className={`${performanceSummary.annualizedReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-xl font-bold`}>
              {performanceSummary.annualizedReturn}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Gain/Loss</div>
            <div className={`${performanceSummary.totalGainLoss.startsWith('+') ? 'text-green-600' : 'text-red-600'} text-xl font-bold`}>
              {performanceSummary.totalGainLoss}
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Portfolio Value</div>
            <div className="text-xl font-bold text-gray-900">{performanceSummary.portfolioValue}</div>
          </div>
        </section>

        {/* Performance Chart Placeholder */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Portfolio Performance Over Time</h2>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
            Interactive Performance Chart Placeholder (e.g., Line Chart with historical data)
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">{metric.metric}</div>
                <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance News & Insights Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Performance News & Insights</h2>
          <ul className="space-y-4">
            {performanceNews.map((news, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{news.headline}</p>
                <p className="text-xs text-gray-600">{news.tag} • {news.time}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// AnalysisPageContent
const AnalysisPageContent = () => {
  const marketAnalysisInsights = [
    { title: 'Global Macro Outlook Q3 2025', description: 'Key economic trends and their impact on markets.', category: 'Macro', time: '1d ago' },
    { title: 'Tech Sector: Growth vs. Value Stocks', description: 'Deep dive into current valuations and future prospects.', category: 'Sector', time: '2d ago' },
    { title: 'Inflationary Pressures and Fed Policy', description: 'Analyzing the latest CPI data and central bank responses.', category: 'Economy', time: '3d ago' },
  ];

  const analystRatings = [
    { company: 'Apple Inc.', symbol: 'AAPL', rating: 'Buy', targetPrice: '$200', firm: 'Goldman Sachs' },
    { company: 'Tesla Inc.', symbol: 'TSLA', rating: 'Hold', targetPrice: '$180', firm: 'Morgan Stanley' },
    { company: 'NVIDIA Corp.', symbol: 'NVDA', rating: 'Strong Buy', targetPrice: '$1050', firm: 'J.P. Morgan' },
  ];

  const researchArticles = [
    { title: 'Quant Models Predict Market Reversal', author: 'Dr. Emily Chen', date: 'Jul 15, 2025' },
    { title: 'Behavioral Finance: Understanding Investor Psychology', author: 'Prof. David Lee', date: 'Jul 10, 2025' },
    { title: 'ESG Investing: Impact and Returns', author: 'Sarah Green', date: 'Jul 01, 2025' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Analysis Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Market Analysis</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Research</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Overview
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Technical
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Fundamental
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Analyst Ratings
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Economic Calendar
          </button>
        </div>

        {/* Market Analysis Insights Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketAnalysisInsights.map((insight, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{insight.category}</span>
                  <span>{insight.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Analysis Tools Placeholder */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Technical Analysis Tools</h2>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
            Interactive Charting / Indicator Tools Placeholder
          </div>
        </section>

        {/* Analyst Ratings Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Analyst Ratings & Price Targets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Symbol</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4 text-right">Target Price</th>
                  <th className="py-3 px-4">Research Firm</th>
                </tr>
              </thead>
              <tbody>
                {analystRatings.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.company}</td>
                    <td className="py-3 px-4 text-gray-700">{item.symbol}</td>
                    <td className={`py-3 px-4 ${item.rating === 'Buy' || item.rating === 'Strong Buy' ? 'text-green-600' : item.rating === 'Hold' ? 'text-yellow-600' : 'text-red-600'} font-medium`}>
                      {item.rating}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-700">{item.targetPrice}</td>
                    <td className="py-3 px-4 text-gray-700">{item.firm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              See all ratings <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Research Articles Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Research Articles</h2>
          <ul className="space-y-4">
            {researchArticles.map((article, idx) => (
              <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow-sm">
                <p className="font-medium text-gray-900 mb-1">{article.title}</p>
                <p className="text-xs text-gray-600">{article.author} • {article.date}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

// HeadlinesPageContent
const HeadlinesPageContent = () => {
  return <div className="p-6 text-center text-gray-500">Headlines Content Here</div>;
};

// WeatherPageContent
const WeatherPageContent = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleCardExpansion = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const hourlyForecastData = [
    { time: 'Now', temp: '19°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Partly cloudy' },
    { time: '2 AM', temp: '18°', icon: <Cloud size={24} className="text-gray-400" />, description: 'Cloudy' },
    { time: '3 AM', temp: '17°', icon: <Cloud size={24} className="text-gray-400" />, description: 'Cloudy' },
    { time: '4 AM', temp: '16°', icon: <CloudRain size={24} className="text-blue-400" />, description: 'Rain showers' },
    { time: '5 AM', temp: '16°', icon: <CloudRain size={24} className="text-blue-400" />, description: 'Rain showers' },
    { time: '6 AM', temp: '15°', icon: <Cloud size={24} className="text-gray-400" />, description: 'Cloudy' },
    { time: '7 AM', temp: '16°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Partly cloudy' },
    { time: '8 AM', temp: '18°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Partly cloudy' },
    { time: '9 AM', temp: '20°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Sunny' },
    { time: '10 AM', temp: '21°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Sunny' },
    { time: '11 AM', temp: '22°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Sunny' },
  ];

  const dailyForecastData = [
    { day: 'Friday', date: 'Jul 19', high: '22°', low: '15°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Partly cloudy', details: 'Clear skies with a gentle breeze. UV index moderate.' },
    { day: 'Saturday', date: 'Jul 20', high: '20°', low: '14°', icon: <CloudRain size={24} className="text-blue-400" />, description: 'Rain showers', details: 'Intermittent rain throughout the day. Bring an umbrella!' },
    { day: 'Sunday', date: 'Jul 21', high: '21°', low: '16°', icon: <Cloud size={24} className="text-gray-400" />, description: 'Cloudy', details: 'Overcast conditions with no rain expected. Mild temperatures.' },
    { day: 'Monday', date: 'Jul 22', high: '23°', low: '17°', icon: <Sun size={24} className="text-yellow-400" />, description: 'Sunny', details: 'Bright and sunny day. Perfect for outdoor activities.' },
    { day: 'Tuesday', date: 'Jul 23', high: '20°', low: '15°', icon: <CloudRain size={24} className="text-blue-400" />, description: 'Light rain', details: 'Light drizzles in the morning, clearing up by afternoon.' },
  ];

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Weather Header and Location */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Weather Forecast</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>London, England</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Current Weather Section */}
        <section className="bg-gray-800 text-white rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="text-6xl font-light mb-2">19°</div>
            <div className="text-lg text-gray-300 mb-1">Partly cloudy</div>
            <div className="text-sm text-gray-400">Feels like 20°</div>
          </div>
          <div className="flex items-center space-x-4">
            <Sun size={64} className="text-yellow-400" />
            <div className="flex flex-col text-right">
              <div className="text-sm text-gray-300">High: 22°</div>
              <div className="text-sm text-gray-300">Low: 15°</div>
            </div>
          </div>
        </section>

        {/* Map Placeholder Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Weather Map</h2>
          <div
            className="w-full h-48 bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-sm"
            style={{ backgroundImage: "url('https://placehold.co/800x400/222222/555555?text=Weather+Map+Placeholder')" }}
          >
            Interactive Map Placeholder
          </div>
        </section>

        {/* Hourly Forecast Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Hourly Forecast</h2>
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            {hourlyForecastData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-20 flex flex-col items-center p-2 rounded-lg bg-gray-700/50 text-white">
                <span className="text-xs text-gray-300 mb-1">{item.time}</span>
                {item.icon}
                <span className="text-base font-medium mt-1">{item.temp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Forecast Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Daily Forecast</h2>
          <div className="space-y-3">
            {dailyForecastData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-3 rounded-lg bg-gray-700/50 text-white cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => toggleCardExpansion(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-sm text-gray-300 hidden sm:block">{item.description}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{item.high}</span>
                    <span className="text-gray-400">{item.low}</span>
                    <ChevronRight size={16} className={`text-gray-400 transition-transform duration-300 ${expandedCardIndex === index ? 'rotate-90' : ''}`} />
                  </div>
                </div>
                {expandedCardIndex === index && (
                  <div className="mt-3 pt-3 border-t border-gray-600 text-sm text-gray-300 animate-fade-in">
                    <p>{item.details}</p>
                    {item.description.includes('rain') && (
                      <div className="relative w-full h-20 overflow-hidden mt-4 rounded-md bg-gray-800">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="rain"
                            style={{
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                              animationDuration: `${1 + Math.random() * 0.5}s`
                            }}
                          ></div>
                        ))}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                          Simulated Rain Effect
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Weather Details Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Weather Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Wind size={20} className="text-gray-400" />
              <span>Wind: 10 km/h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet size={20} className="text-gray-400" />
              <span>Humidity: 75%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Thermometer size={20} className="text-gray-400" />
              <span>Pressure: 1012 hPa</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye size={20} className="text-gray-400" />
              <span>Visibility: 10 km</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gauge size={20} className="text-gray-400" />
              <span>UV Index: 3 (Moderate)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sunrise size={20} className="text-gray-400" />
              <span>Sunrise: 05:00 AM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sunset size={20} className="text-gray-400" />
              <span>Sunset: 09:00 PM</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


// NewsPageContent
const NewsPageContent = () => {
  const breakingNews = [
    { headline: 'Federal Reserve signals potential rate cuts in Q4 2025', category: 'Monetary Policy', time: '15 min ago', priority: 'high' },
    { headline: 'Tech giants report strong Q3 earnings, beating expectations', category: 'Earnings', time: '1h ago', priority: 'high' },
    { headline: 'Global supply chain disruptions impact manufacturing sector', category: 'Economy', time: '2h ago', priority: 'medium' },
  ];

  const marketNews = [
    { headline: 'S&P 500 reaches new all-time high amid economic optimism', category: 'Markets', time: '30 min ago', source: 'Reuters' },
    { headline: 'Cryptocurrency market sees renewed institutional interest', category: 'Crypto', time: '45 min ago', source: 'Bloomberg' },
    { headline: 'Energy sector rallies on rising oil prices', category: 'Energy', time: '1h ago', source: 'CNBC' },
    { headline: 'ESG investing trends reshape portfolio strategies', category: 'ESG', time: '2h ago', source: 'Financial Times' },
    { headline: 'Emerging markets show signs of recovery', category: 'Global', time: '3h ago', source: 'Wall Street Journal' },
  ];

  const sectorNews = [
    { sector: 'Technology', headline: 'AI revolution drives tech stock valuations higher', time: '1h ago' },
    { sector: 'Healthcare', headline: 'Biotech breakthrough sparks sector-wide rally', time: '2h ago' },
    { sector: 'Financial', headline: 'Banking sector benefits from rising interest rates', time: '3h ago' },
    { sector: 'Energy', headline: 'Renewable energy investments reach record levels', time: '4h ago' },
  ];

  const economicIndicators = [
    { indicator: 'GDP Growth', value: '+2.8%', change: '+0.2%', status: 'positive' },
    { indicator: 'Unemployment', value: '3.7%', change: '-0.1%', status: 'positive' },
    { indicator: 'Inflation (CPI)', value: '3.2%', change: '-0.3%', status: 'positive' },
    { indicator: 'Consumer Confidence', value: '108.5', change: '+2.1', status: 'positive' },
  ];

  return (
    <div className="px-4 md:px-6 py-6">
      {/* News Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Financial News</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Sources</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Featured Media - Top Story */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Featured Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Video Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://placehold.co/400x225/1f2937/ffffff?text=Market+Analysis+Video"
                  alt="Market Analysis"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </button>
                </div>
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  LIVE
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fed Chair Powell Speaks on Interest Rates</h3>
                <p className="text-sm text-gray-600 mb-2">Live coverage of the Federal Reserve Chairman's latest remarks on monetary policy.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>CNBC</span>
                  <span>12:30 PM EST</span>
                </div>
              </div>
            </div>

            {/* News Image Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://placehold.co/400x225/2563eb/ffffff?text=Market+Charts"
                alt="Market Charts"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">S&P 500 Hits Record High</h3>
                <p className="text-sm text-gray-600 mb-2">Stock market reaches new milestone amid strong earnings reports and economic optimism.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Reuters</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>

            {/* Interactive Chart Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">+2.4%</div>
                  <div className="text-sm text-gray-600">Market Performance</div>
                  <div className="text-xs text-gray-500 mt-2">Interactive Chart</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Real-Time Market Data</h3>
                <p className="text-sm text-gray-600 mb-2">Live market performance with interactive charts and analysis tools.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Live Data</span>
                  <span>Updated now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Breaking
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Markets
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Videos
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Images
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Economy
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Global
          </button>
        </div>

        {/* Media Cards Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Featured Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Video Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://placehold.co/400x225/1f2937/ffffff?text=Market+Analysis+Video"
                  alt="Market Analysis"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </button>
                </div>
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  LIVE
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fed Chair Powell Speaks on Interest Rates</h3>
                <p className="text-sm text-gray-600 mb-2">Live coverage of the Federal Reserve Chairman's latest remarks on monetary policy.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>CNBC</span>
                  <span>12:30 PM EST</span>
                </div>
              </div>
            </div>

            {/* News Image Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://placehold.co/400x225/2563eb/ffffff?text=Market+Charts"
                alt="Market Charts"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">S&P 500 Hits Record High</h3>
                <p className="text-sm text-gray-600 mb-2">Stock market reaches new milestone amid strong earnings reports and economic optimism.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Reuters</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>

            {/* Interactive Chart Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">+2.4%</div>
                  <div className="text-sm text-gray-600">Market Performance</div>
                  <div className="text-xs text-gray-500 mt-2">Interactive Chart</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Real-Time Market Data</h3>
                <p className="text-sm text-gray-600 mb-2">Live market performance with interactive charts and analysis tools.</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Live Data</span>
                  <span>Updated now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking News Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Breaking News</h2>
          <div className="space-y-3">
            {breakingNews.map((news, i) => (
              <div key={i} className={`p-4 rounded-lg shadow-sm border-l-4 ${news.priority === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'}`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{news.headline}</h3>
                  {news.priority === 'high' && (
                    <span className="px-2 py-1 bg-red-600 text-white rounded-full text-xs">
                      Breaking
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{news.category}</span>
                  <span>{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market News Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Market News</h2>
          <div className="space-y-4">
            {marketNews.map((news, i) => (
              <div key={i} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-1">{news.headline}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{news.category} • {news.source}</span>
                  <span>{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Economic Indicators */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Economic Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {economicIndicators.map((indicator, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="text-sm text-gray-600 mb-1">{indicator.indicator}</div>
                <div className="text-lg font-bold text-gray-900">{indicator.value}</div>
                <div className={`text-sm ${indicator.status === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {indicator.change}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sector News */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Sector News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectorNews.map((news, i) => (
              <div key={i} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {news.sector}
                  </span>
                  <span className="text-xs text-gray-500">{news.time}</span>
                </div>
                <h3 className="font-medium text-gray-900">{news.headline}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// ExplorePageContent
const ExplorePageContent = () => {
  const investmentOpportunities = [
    { name: 'Growth ETFs', symbol: 'VUG', description: 'Large-cap growth stocks with strong potential', return: '+12.5%', risk: 'Medium', minInvestment: '$100' },
    { name: 'Dividend Aristocrats', symbol: 'NOBL', description: 'Companies with 25+ years of dividend increases', return: '+8.2%', risk: 'Low', minInvestment: '$250' },
    { name: 'Emerging Markets', symbol: 'VWO', description: 'Diversified exposure to developing economies', return: '+15.8%', risk: 'High', minInvestment: '$500' },
    { name: 'Real Estate Investment', symbol: 'VNQ', description: 'REITs providing real estate exposure', return: '+9.1%', risk: 'Medium', minInvestment: '$200' },
  ];

  const investmentStrategies = [
    { strategy: 'Dollar-Cost Averaging', description: 'Invest fixed amounts regularly to reduce volatility impact', suitability: 'Beginners' },
    { strategy: 'Value Investing', description: 'Buy undervalued stocks with strong fundamentals', suitability: 'Intermediate' },
    { strategy: 'Growth Investing', description: 'Focus on companies with high growth potential', suitability: 'Intermediate' },
    { strategy: 'Index Fund Investing', description: 'Passive investing in broad market indices', suitability: 'All Levels' },
  ];

  const marketInsights = [
    { title: 'Q3 2025 Market Outlook: Tech Sector Resilience', category: 'Market Analysis', readTime: '5 min', featured: true },
    { title: 'ESG Investing: Sustainable Returns in Focus', category: 'ESG', readTime: '7 min', featured: false },
    { title: 'Interest Rate Impact on Bond Portfolios', category: 'Fixed Income', readTime: '4 min', featured: false },
    { title: 'Cryptocurrency Integration in Traditional Portfolios', category: 'Digital Assets', readTime: '6 min', featured: true },
  ];

  const riskAssessment = {
    conservative: { allocation: '70% Bonds, 30% Stocks', expectedReturn: '5-7%', volatility: 'Low' },
    moderate: { allocation: '60% Stocks, 40% Bonds', expectedReturn: '7-10%', volatility: 'Medium' },
    aggressive: { allocation: '80% Stocks, 20% Bonds', expectedReturn: '10-15%', volatility: 'High' },
  };

  return (
    // Removed 'container mx-auto'
    <div className="px-4 md:px-6 py-6">
      {/* Investment Header and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-semibold">Investment</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>All Opportunities</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
            Opportunities
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Strategies
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Risk Assessment
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Market Insights
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
            Portfolio Builder
          </button>
        </div>

        {/* Investment Opportunities Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Featured Investment Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investmentOpportunities.map((opportunity, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{opportunity.name}</h3>
                    <span className="text-sm text-blue-600 font-medium">{opportunity.symbol}</span>
                  </div>
                  <span className="text-green-600 font-medium text-sm">{opportunity.return}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{opportunity.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Risk: {opportunity.risk}</span>
                  <span>Min: {opportunity.minInvestment}</span>
                </div>
                <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Strategies Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Investment Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investmentStrategies.map((strategy, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{strategy.strategy}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {strategy.suitability}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{strategy.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Assessment Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Risk Assessment & Portfolio Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-green-800 mb-2">Conservative</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Allocation:</strong> {riskAssessment.conservative.allocation}</p>
                <p><strong>Expected Return:</strong> {riskAssessment.conservative.expectedReturn}</p>
                <p><strong>Volatility:</strong> {riskAssessment.conservative.volatility}</p>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-yellow-800 mb-2">Moderate</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Allocation:</strong> {riskAssessment.moderate.allocation}</p>
                <p><strong>Expected Return:</strong> {riskAssessment.moderate.expectedReturn}</p>
                <p><strong>Volatility:</strong> {riskAssessment.moderate.volatility}</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-red-800 mb-2">Aggressive</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Allocation:</strong> {riskAssessment.aggressive.allocation}</p>
                <p><strong>Expected Return:</strong> {riskAssessment.aggressive.expectedReturn}</p>
                <p><strong>Volatility:</strong> {riskAssessment.aggressive.volatility}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Market Insights & Research</h2>
          <div className="space-y-4">
            {marketInsights.map((insight, i) => (
              <div key={i} className={`p-4 rounded-lg shadow-sm ${insight.featured ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  {insight.featured && (
                    <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-xs">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{insight.category}</span>
                  <span>{insight.readTime} read</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center">
              View all insights <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
        </section>

        {/* Portfolio Builder Placeholder */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Portfolio Builder Tool</h2>
          <div className="h-64 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
            Interactive Portfolio Builder Placeholder (Drag & Drop Asset Allocation)
          </div>
        </section>

        {/* Investment Calculator */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Investment Calculator</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Investment</label>
                <input type="number" placeholder="$10,000" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution</label>
                <input type="number" placeholder="$500" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Horizon (Years)</label>
                <input type="number" placeholder="10" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              Calculate Returns
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

// FinancePageContent
const FinancePageContent = () => {
  return <div className="p-6 text-center text-gray-500">Finance Content Here</div>;
};

// --- Component: Sidebar ---
// This component now only handles its internal rendering and state based on props
const Sidebar = ({ isOpen, toggleSidebar, activePage, setActivePage }) => {
  const navigate = useNavigate(); // Hook to change routes

  const navItems = [
    { name: 'Finance', icon: <BarChart size={20} />, id: 'finance', path: '/finance' },
    { name: 'Stocks', icon: <TrendingUp size={20} />, id: 'stocks', path: '/stocks' },
    { name: 'Markets', icon: <BarChart size={20} />, id: 'markets', path: '/markets' },
    { name: 'Currencies', icon: <DollarSign size={20} />, id: 'currencies', path: '/currencies' },
    { name: 'Crypto', icon: <Globe size={20} />, id: 'crypto', path: '/crypto' },
    { name: 'Portfolio', icon: <Briefcase size={20} />, id: 'portfolio', path: '/portfolio' },
    { name: 'Performance', icon: <Activity size={20} />, id: 'performance', path: '/performance' },
    { name: 'Analysis', icon: <LineChart size={20} />, id: 'analysis', path: '/analysis' },
    { name: 'Explore & Invest', icon: <SlidersHorizontal size={20} />, id: 'explore', path: '/explore' },
    { name: 'Weather', icon: <Cloud size={20} />, id: 'weather', path: '/weather' },
    { name: 'News', icon: <Newspaper size={20} />, id: 'news', path: '/news' },
  ];

  return (
    <> {/* Removed the outer div here, as its positioning is now handled by MainAppLayout */}
      <div className="flex justify-between items-center mb-6">
        {isOpen && <h2 className="text-lg font-medium text-white">Market News</h2>}
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

            {/* Top Navigation Bar (Header - fixed full width) */}
            <nav className={`fixed top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 py-3 shadow-sm transition-all duration-300 ease-in-out ${isSidebarOpen ? 'left-64 right-0' : 'left-16 right-0'}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                    <div className="flex items-center space-x-6">
                        <button onClick={toggleSidebar} className="md:hidden text-gray-600 hover:text-gray-900 mr-2">
                            <Menu size={24} />
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
                        >
                            <span className="text-xl">📈</span>
                            <div className="text-lg font-bold tracking-tighter">
                                Market News
                            </div>
                        </button>
                        <div className="relative flex items-center bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-gray-600 w-56 md:w-80 border border-white/30">
                            <Search size={14} className="mr-2 text-gray-500" />
                            <span>Search Market News...</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
                        <a href="#" onClick={() => navigate('/weather')} className="hover:text-blue-600 transition-colors duration-200">Weather</a>
                        <a href="#" onClick={() => navigate('/finance')} className="hover:text-blue-600 transition-colors duration-200">Finance</a>
                        <a href="#" onClick={() => navigate('/news')} className="hover:text-blue-600 transition-colors duration-200">News</a>
                        {/* Auth Buttons */}
                        <div className="flex gap-1">
                            <button
                                onClick={() => navigate('/login')}
                                className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-lg px-2 py-1 text-xs font-medium text-gray-700 hover:bg-white/70 transition-all duration-200"
                            >
                                <span>Login</span>
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="backdrop-blur-xl bg-black/80 border border-black/30 rounded-lg px-2 py-1 text-xs font-medium text-white hover:bg-black/90 transition-all duration-200"
                            >
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Wrapper */}
            {/* Main Content Wrapper */}
            <div className={`flex flex-col flex-1 transition-all duration-300 ease-in-out overflow-x-hidden ${isSidebarOpen ? 'ml-64' : 'ml-16'} pt-20`}>

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
                        <Route path="/news" element={<NewsPageContent />} />
                        <Route path="/explore" element={<ExplorePageContent />} />
                        <Route path="/finance" element={<FinancePageContent />} />

                        <Route path="/category/beauty" element={<BeautyProducts />} />
                        <Route path="/category/electronics" element={<ElectronicsProducts />} />
                        <Route path="/category/fashion" element={<FashionProducts />} />
                        <Route path="/category/home-kitchen" element={<HomeKitchenProducts />} />
                        <Route path="/category/sports-outdoors" element={<SportsOutdoorsProducts />} />
                        <Route path="/category/books-media" element={<BooksMediaProducts />} />
                        <Route path="/category/toys-games" element={<ToysGamesProducts />} />
                        <Route path="/category/automotive" element={<AutomotiveProducts />} />
                        <Route path="/category/health-wellbeing" element={<HealthWellbeingProducts />} />
                        <Route path="/category/ai-tools" element={<AIToolsProducts />} />
                        <Route path="/category/:category" element={<CategoryPlaceholder key={window.location.pathname} />} />

                        {/* Dedicated Product Detail Routes */}
                        <Route path="/product/macbook-air-m2" element={<MacBookAirM2Page />} />
                        <Route path="/product/iphone-15-pro-max" element={<IPhoneProMaxPage />} />
                        <Route path="/product/samsung-galaxy-s24-ultra" element={<SamsungGalaxyPage />} />

                        {/* Fallback for other product slugs */}
                        <Route path="/product/:slug" element={<ProductDetailRoute />} />
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

function ProductDetailRoute() {
  const { slug } = useParams();
  
  // Import the electronics products data
  const electronicsProducts = [
    {
      name: "iPhone 15 Pro Max",
      url: "https://www.amazon.com/Apple-iPhone-15-Pro-Max/dp/B0CM5J8HQQ?tag=1mlaffiliates-20",
      image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
      description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
      price: 1199.99,
      rating: 4.8,
      reviews: 1247,
      category: "Smartphones"
    },
    {
      name: "MacBook Air M2",
      url: "https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-30%E2%80%91core/dp/B0B3C5T6M8?tag=1mlaffiliates-20",
      image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
      description: "Ultra-thin laptop with M2 chip, all-day battery life, and stunning Retina display.",
      price: 1099.99,
      rating: 4.9,
      reviews: 892,
      category: "Laptops"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      url: "https://www.amazon.com/Samsung-Electronics-Unlocked-Smartphone-Titanium/dp/B0CSJZ8Q8L?tag=1mlaffiliates-20",
      image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
      description: "Premium Android flagship with S Pen, advanced AI features, and titanium frame.",
      price: 1299.99,
      rating: 4.7,
      reviews: 567,
      category: "Smartphones"
    }
  ];
  
  // Find the product by slug
  const product = electronicsProducts.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === slug
  ) || {
    name: "Product Not Found",
    url: "https://example.com",
    image: "https://placehold.co/400x250/4F46E5/FFFFFF?text=Product+Not+Found",
    description: "This product could not be found.",
    price: 0,
    currency: 'USD',
    rating: 0,
    reviews: 0,
    category: "Unknown",
    brand: "Unknown",
    availability: "Out of Stock",
    shipping: "N/A"
  };
  
  return <ProductDetailPage product={product} />;
}

// The actual App component that main.jsx renders
// This component simply wraps MainAppLayout inside a Router context
export default function App() {
  const location = useLocation();
  
  // List of finance-related routes that should use MainAppLayout
  const financeRoutes = [
    '/finance',
    '/stocks',
    '/currencies',
    '/markets',
    '/crypto',
    '/portfolio',
    '/performance',
    '/analysis',
    '/headlines',
    '/weather',
    '/news',
    '/explore',
    '/dashboard',
  ];
  // If the current path is a finance route, use MainAppLayout
  if (financeRoutes.includes(location.pathname)) {
    return <MainAppLayout />;
  }
  // If login page, render login page
  if (location.pathname === '/login') {
    return <LoginPage />;
  }
  // If signup page, render signup page
  if (location.pathname === '/signup') {
    return <SignUpPage />;
  }
  // If forgot password page, render forgot password page
  if (location.pathname === '/forgot-password') {
    return <ForgotPasswordPage />;
  }

  // If home, category, product, or categories page, render plain
  if (
    location.pathname === '/' ||
    location.pathname === '/categories' ||
    location.pathname.startsWith('/category/') ||
    location.pathname.startsWith('/product/')
  ) {
    if (location.pathname === '/') {
      return <HomePageContent />;
    }
    if (location.pathname === '/categories') {
      return <CategoriesPageContent />;
    }
          if (location.pathname === '/category/beauty') {
      return <BeautyProducts />;
    }
    if (location.pathname === '/category/electronics') {
      return <ElectronicsProducts />;
    }
    if (location.pathname === '/category/fashion') {
      return <FashionProducts />;
    }
    if (location.pathname === '/category/home-kitchen') {
      return <HomeKitchenProducts />;
    }
    if (location.pathname === '/category/sports-outdoors') {
      return <SportsOutdoorsProducts />;
    }
    if (location.pathname === '/category/books-media') {
      return <BooksMediaProducts />;
    }
    if (location.pathname === '/category/toys-games') {
      return <ToysGamesProducts />;
    }
    if (location.pathname === '/category/automotive') {
      return <AutomotiveProducts />;
    }
    if (location.pathname === '/category/health-wellbeing') {
      return <HealthWellbeingProducts />;
    }
    if (location.pathname === '/category/ai-tools') {
      return <AIToolsProducts />;
    }
    if (location.pathname.startsWith('/product/')) {
      // Handle specific product routes
      if (location.pathname === '/product/macbook-air-m2') {
        return <MacBookAirM2Page />;
      }
      if (location.pathname === '/product/iphone-15-pro-max') {
        return <IPhoneProMaxPage />;
      }
      if (location.pathname === '/product/samsung-galaxy-s24-ultra') {
        return <SamsungGalaxyPage />;
      }
      // Fallback to dynamic route
      return <ProductDetailRoute />;
    }
    // fallback for other categories
    return <CategoryPlaceholder key={location.pathname} />;
  }
  // Default to MainAppLayout for any other route
  return <MainAppLayout />;
}