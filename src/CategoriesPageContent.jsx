import React, { useState, useEffect, Suspense } from 'react'
import { ShoppingCart, Tag, Star, Menu, Package, Cpu, Shirt, Receipt, Search, Bell, Settings, Home, User, ChevronRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Static content extracted to file end
const categoriesData = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Smartphones, Laptops, Wearables, Cameras.',
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    link: '/category/electronics',
    productCount: 1247,
    color: 'from-blue-500/20 to-purple-600/20',
    icon: '💻'
  },
  {
    id: 2,
    name: 'Fashion & Apparel',
    description: 'Apparel, Footwear, Accessories, Jewelry.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    link: '/category/fashion',
    productCount: 2156,
    color: 'from-pink-500/20 to-rose-600/20',
    icon: '👗'
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    description: 'Appliances, Cookware, Decor, Furniture.',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    link: '/category/home-kitchen',
    productCount: 1893,
    color: 'from-emerald-500/20 to-teal-600/20',
    icon: '🏠'
  },
  {
    id: 4,
    name: 'Health & Beauty',
    description: 'Skincare, Makeup, Haircare, Fragrances.',
    imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop',
    link: '/category/beauty',
    productCount: 892,
    color: 'from-violet-500/20 to-indigo-600/20',
    icon: '✨'
  },
  {
    id: 9,
    name: 'Health & Wellbeing',
    description: 'Fitness trackers, Supplements, Recovery tools.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    link: '/category/health-wellbeing',
    productCount: 567,
    color: 'from-green-500/20 to-emerald-600/20',
    icon: '🏃‍♂️'
  },
  {
    id: 10,
    name: 'AI Tools',
    description: 'AI assistants, Content creation, Development tools.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    link: '/category/ai-tools',
    productCount: 234,
    color: 'from-purple-500/20 to-pink-600/20',
    icon: '🤖'
  },
  {
    id: 5,
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, Camping gear, Apparel.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    link: '/category/sports-outdoors',
    productCount: 654,
    color: 'from-orange-500/20 to-red-600/20',
    icon: '🏃‍♂️'
  },
  {
    id: 6,
    name: 'Books & Media',
    description: 'Fiction, Non-Fiction, Textbooks, E-books.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    link: '/category/books-media',
    productCount: 2341,
    color: 'from-amber-500/20 to-yellow-600/20',
    icon: '📚'
  },
  {
    id: 7,
    name: 'Toys & Games',
    description: 'Educational toys, Board games, Action figures.',
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&h=600&fit=crop',
    link: '/category/toys-games',
    productCount: 567,
    color: 'from-red-500/20 to-pink-600/20',
    icon: '🎮'
  },
  {
    id: 8,
    name: 'Automotive',
    description: 'Car parts, Accessories, Tools & Equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    link: '/category/automotive',
    productCount: 445,
    color: 'from-slate-500/20 to-gray-600/20',
    icon: '🚗'
  },
]

function CategoryCard({ category, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
  }

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isPressed ? 'scale-95' : isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      {/* Glassmorphism Card */}
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => { 
              e.target.onerror = null
              e.target.src = `https://placehold.co/800x600/4F46E5/FFFFFF?text=${category.name}`
            }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium">Explore</span>
              <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          {/* Product Count & Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">4.8</span>
              </div>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-600">{category.productCount} products</span>
            </div>
            <div className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-xs font-medium text-blue-700">Featured</span>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  )
}

function CategoriesPageContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const filters = ['All', 'Popular', 'New Arrivals', 'Top Rated', 'Deals']

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCategoryClick = (category) => {
    setIsLoading(true)
    // Simulate loading for smooth transition
    setTimeout(() => {
      navigate(category.link)
      setIsLoading(false)
    }, 150)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading category...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Translucent Header Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-2xl">🌍</span>
              <div className="text-xl font-bold tracking-tighter">
                <span className="mr-[-2px]">1</span>MarketLive
              </div>
            </button>
            <div className="relative flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-600 w-64 md:w-96 border border-white/30">
              <Search size={16} className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-sm text-gray-600 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles size={24} className="text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover Categories
            </h1>
            <Sparkles size={24} className="text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore curated collections of premium products across all categories
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex backdrop-blur-xl bg-white/50 rounded-2xl p-2 border border-white/30 shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Featured Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles size={24} className="text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">New Arrivals</h3>
              </div>
              <p className="text-gray-600 mb-6">Discover the latest products across all categories with exclusive early access</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
                Shop Now
              </button>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Tag size={24} className="text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Deals & Offers</h3>
              </div>
              <p className="text-gray-600 mb-6">Limited time offers on popular products with up to 70% off</p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-200 transform hover:scale-105">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPageContent 