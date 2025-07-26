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
import { CategoryPlaceholder, BeautyProducts, CategoryProductPage, ProductDetailPage, ElectronicsProducts } from './HomePageContent';
import CategoriesPageContent from './CategoriesPageContent';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const sectors = ['All', 'Technology', 'Healthcare', 'Finance', 'Consumer', 'Energy', 'Industrial'];

  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.84, change: 2.34, percent: 1.25, volume: '45.2M', marketCap: '2.98T', sector: 'Technology' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: -1.23, percent: -0.32, volume: '23.1M', marketCap: '2.81T', sector: 'Technology' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: 0.89, percent: 0.63, volume: '18.7M', marketCap: '1.79T', sector: 'Technology' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.94, change: 3.45, percent: 2.32, volume: '32.4M', marketCap: '1.58T', sector: 'Consumer' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: -5.67, percent: -2.23, volume: '89.1M', marketCap: '789.2B', sector: 'Consumer' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 167.23, change: 0.45, percent: 0.27, volume: '8.9M', marketCap: '403.1B', sector: 'Healthcare' },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 172.56, change: 1.23, percent: 0.72, volume: '12.3M', marketCap: '498.7B', sector: 'Finance' },
    { symbol: 'V', name: 'Visa Inc.', price: 267.89, change: -0.78, percent: -0.29, volume: '15.6M', marketCap: '548.9B', sector: 'Finance' },
    { symbol: 'XOM', name: 'Exxon Mobil Corp.', price: 98.45, change: 2.12, percent: 2.20, volume: '22.8M', marketCap: '412.3B', sector: 'Energy' },
    { symbol: 'CAT', name: 'Caterpillar Inc.', price: 245.67, change: 3.21, percent: 1.32, volume: '4.2M', marketCap: '128.9B', sector: 'Industrial' },
  ];

  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stock.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All' || stock.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'price': return b.price - a.price;
      case 'change': return b.change - a.change;
      case 'volume': return b.volume.localeCompare(a.volume);
      default: return 0;
    }
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stocks</h1>
          <p className="text-gray-600">Track and analyze stock market performance</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            Add to Watchlist
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
            Export Data
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search stocks by symbol or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="change">Sort by Change</option>
              <option value="volume">Sort by Volume</option>
            </select>
          </div>
        </div>
      </div>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">S&P 500</div>
          <div className="text-xl font-bold text-gray-900">4,783.35</div>
          <div className="text-sm text-green-600">+12.45 (+0.26%)</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">NASDAQ</div>
          <div className="text-xl font-bold text-gray-900">15,003.22</div>
          <div className="text-sm text-red-600">-23.67 (-0.16%)</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">DOW JONES</div>
          <div className="text-xl font-bold text-gray-900">37,592.98</div>
          <div className="text-sm text-green-600">+45.23 (+0.12%)</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">VIX</div>
          <div className="text-xl font-bold text-gray-900">12.34</div>
          <div className="text-sm text-red-600">-0.45 (-3.52%)</div>
        </div>
      </div>

      {/* Stocks Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedStocks.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{stock.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${stock.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.percent >= 0 ? '+' : ''}{stock.percent}%)
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{stock.volume}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{stock.marketCap}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{stock.sector}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Chart</button>
                      <button className="text-green-600 hover:text-green-800 text-sm">Buy</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
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
  const [location, setLocation] = useState('New York, NY');
  const [unit, setUnit] = useState('fahrenheit');

  // Mock weather data
  const currentWeather = {
    temperature: 72,
    feelsLike: 74,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 8,
    pressure: 1013,
    visibility: 10,
    uvIndex: 5,
    icon: 'partly-cloudy'
  };

  const hourlyForecast = [
    { time: 'Now', temp: 72, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
    { time: '1 PM', temp: 75, condition: 'Sunny', icon: 'sunny' },
    { time: '2 PM', temp: 77, condition: 'Sunny', icon: 'sunny' },
    { time: '3 PM', temp: 76, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
    { time: '4 PM', temp: 74, condition: 'Cloudy', icon: 'cloudy' },
    { time: '5 PM', temp: 72, condition: 'Light Rain', icon: 'rain' },
    { time: '6 PM', temp: 70, condition: 'Light Rain', icon: 'rain' },
    { time: '7 PM', temp: 68, condition: 'Cloudy', icon: 'cloudy' },
  ];

  const dailyForecast = [
    { day: 'Today', high: 77, low: 65, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
    { day: 'Tomorrow', high: 82, low: 68, condition: 'Sunny', icon: 'sunny' },
    { day: 'Wednesday', high: 79, low: 66, condition: 'Cloudy', icon: 'cloudy' },
    { day: 'Thursday', high: 75, low: 63, condition: 'Rain', icon: 'rain' },
    { day: 'Friday', high: 78, low: 65, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
    { day: 'Saturday', high: 81, low: 67, condition: 'Sunny', icon: 'sunny' },
    { day: 'Sunday', high: 83, low: 69, condition: 'Sunny', icon: 'sunny' },
  ];

  const airQuality = {
    index: 45,
    level: 'Good',
    description: 'Air quality is satisfactory, and air pollution poses little or no risk.'
  };

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <Sun size={24} className="text-yellow-500" />;
      case 'partly cloudy': return <Cloud size={24} className="text-gray-500" />;
      case 'cloudy': return <Cloud size={24} className="text-gray-600" />;
      case 'rain': case 'light rain': return <CloudRain size={24} className="text-blue-500" />;
      default: return <Cloud size={24} className="text-gray-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weather</h1>
          <p className="text-gray-600">Current weather conditions and forecasts</p>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <button 
            onClick={() => setUnit(unit === 'fahrenheit' ? 'celsius' : 'fahrenheit')}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50"
          >
            °{unit === 'fahrenheit' ? 'F' : 'C'}
          </button>
        </div>
      </div>

      {/* Current Weather */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{currentWeather.temperature}°{unit === 'fahrenheit' ? 'F' : 'C'}</h2>
                <p className="text-lg text-gray-600">{currentWeather.condition}</p>
                <p className="text-sm text-gray-500">Feels like {currentWeather.feelsLike}°{unit === 'fahrenheit' ? 'F' : 'C'}</p>
              </div>
              <div className="text-right">
                {getWeatherIcon(currentWeather.condition)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Droplet size={16} className="text-blue-500 mr-1" />
                <span className="text-sm text-gray-600">Humidity</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{currentWeather.humidity}%</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Wind size={16} className="text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">Wind</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{currentWeather.windSpeed} mph</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Gauge size={16} className="text-purple-500 mr-1" />
                <span className="text-sm text-gray-600">Pressure</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{currentWeather.pressure} hPa</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Eye size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Visibility</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">{currentWeather.visibility} mi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Forecast</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {hourlyForecast.map((hour, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px]">
              <div className="text-sm text-gray-600 mb-2">{hour.time}</div>
              <div className="mb-2">{getWeatherIcon(hour.condition)}</div>
              <div className="text-lg font-semibold text-gray-900">{hour.temp}°</div>
              <div className="text-xs text-gray-500 text-center">{hour.condition}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Forecast and Air Quality */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Forecast */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">7-Day Forecast</h3>
          <div className="space-y-3">
            {dailyForecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-sm text-gray-600">{day.day}</div>
                  {getWeatherIcon(day.condition)}
                  <div className="text-sm text-gray-600">{day.condition}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-semibold text-gray-900">{day.high}°</div>
                  <div className="text-sm text-gray-500">{day.low}°</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Air Quality */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Air Quality</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{airQuality.index}</div>
            <div className="text-lg font-semibold text-green-600 mb-2">{airQuality.level}</div>
            <p className="text-sm text-gray-600">{airQuality.description}</p>
          </div>
        </div>
      </div>

      {/* Sunrise/Sunset */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sun & Moon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <Sunrise size={24} className="text-orange-500" />
            <div>
              <div className="text-sm text-gray-600">Sunrise</div>
              <div className="text-lg font-semibold text-gray-900">6:45 AM</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Sunset size={24} className="text-red-500" />
            <div>
              <div className="text-sm text-gray-600">Sunset</div>
              <div className="text-lg font-semibold text-gray-900">7:32 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
                        <a href="#" onClick={() => navigate('/finance')} className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                            <Newspaper size={16} className="mr-1" /> Finance
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
                        <Route path="/finance" element={<FinancePageContent />} />

                        <Route path="/category/beauty" element={<BeautyProducts />} />
                        <Route path="/category/electronics" element={<ElectronicsProducts />} />
                        <Route path="/category/:category" element={<CategoryPlaceholder key={window.location.pathname} />} />
                        <Route path="/product/:slug" element={<ProductDetailPage />} />
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
  
  const product = {
    name: "Test Product",
    url: "https://example.com",
    image: "https://placehold.co/400x250/4F46E5/FFFFFF?text=Test+Product",
    description: "This is a test product to verify the component works.",
    price: 99.99,
    currency: 'USD',
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
    '/shopping',
    '/explore',
    '/dashboard',
  ];
  // If the current path is a finance route, use MainAppLayout
  if (financeRoutes.includes(location.pathname)) {
    return <MainAppLayout />;
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
    if (location.pathname.startsWith('/product/')) {
      return <ProductDetailRoute />;
    }
    // fallback for other categories
    return <CategoryPlaceholder key={location.pathname} />;
  }
  // Default to MainAppLayout for any other route
  return <MainAppLayout />;
}