import React, { useState, useEffect } from 'react';
import { Search, Settings, Cloud, Newspaper, ShoppingCart, ThumbsUp, Bookmark, PlayCircle, Heart, Share2, MessageSquare, Briefcase, SlidersHorizontal, User, Star } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Temporary fallback components
const SignedIn = ({ children }) => null; // Always show as signed out for now
const SignedOut = ({ children }) => children; // Always show signed out content
const UserButton = () => null;



function CategoryProductPage({ title, products }) {
  const [modalProduct, setModalProduct] = useState(null);
  const [search, setSearch] = useState('');
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="w-full bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-lg text-blue-700">MLN</span>
          <span className="text-base font-semibold text-gray-700">{title}</span>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-600" aria-label="Cart">
            <ShoppingCart size={22} />
          </button>
          <button className="hover:text-blue-600" aria-label="Shop">
            <span className="font-semibold">Shop</span>
          </button>
        </div>
      </nav>
      {/* Product Grid */}
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition" onClick={() => setModalProduct(product)}>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-3" onError={e => {e.target.onerror=null; e.target.src='https://placehold.co/400x250?text=No+Image';}} />
              <h2 className="text-base font-semibold mb-2 text-center">{product.name}</h2>
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
    </div>
  );
}



// Update beauty products with better data structure
const updatedBeautyProducts = [
  {
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    url: "https://www.amazon.com/Fenty-Beauty-Universal-Luminizer-Fenty/dp/B075FDQZPX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Universal lip gloss that enhances your natural lip color with explosive shine.",
    price: 19.00,
    rating: 4.6,
    reviews: 8765,
    category: "Lip Care"
  },
  {
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    url: "https://www.amazon.com/Ordinary-Niacinamide-Zinc-Reduces-Appearance/dp/B06ZXZB7G3?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "High-strength vitamin and mineral blemish formula for clearer skin.",
    price: 7.90,
    rating: 4.4,
    reviews: 23456,
    category: "Skincare"
  },
  {
    name: "Rare Beauty Soft Pinch Liquid Blush",
    url: "https://www.amazon.com/Rare-Beauty-Selena-Gomez-Liquid/dp/B08HVZB8YR?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "Weightless liquid blush that blends seamlessly for a natural flush.",
    price: 23.00,
    rating: 4.7,
    reviews: 12890,
    category: "Makeup"
  },
  {
    name: "Olaplex No. 3 Hair Perfector",
    url: "https://www.amazon.com/Olaplex-Hair-Perfector-No-3/dp/B00SNM5US4?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "At-home treatment that reduces breakage and strengthens all hair types.",
    price: 28.00,
    rating: 4.5,
    reviews: 15678,
    category: "Hair Care"
  },
  {
    name: "Drunk Elephant C-Firma Day Serum",
    url: "https://www.amazon.com/Drunk-Elephant-C-Firma-Fresh-Serum/dp/B01M8G39OW?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Potent vitamin C day serum that firms, brightens, and improves signs of photoaging.",
    price: 80.00,
    rating: 4.3,
    reviews: 6789,
    category: "Skincare"
  },
  {
    name: "Charlotte Tilbury Pillow Talk Lipstick",
    url: "https://www.amazon.com/Charlotte-Tilbury-Matte-Revolution-Lipstick/dp/B07GVJJ5VZ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_SL1500_.jpg",
    description: "Iconic matte lipstick in the universally flattering Pillow Talk shade.",
    price: 38.00,
    rating: 4.8,
    reviews: 9876,
    category: "Makeup"
  }
];

function BeautyProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const categories = ['All', 'Skincare', 'Makeup', 'Hair Care', 'Lip Care']

  const filteredProducts = updatedBeautyProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center">
            <SignedOut>
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
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg",
                    userButtonPopoverActionButton: "hover:bg-gray-50"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Health & Beauty</span>
        </div>

        {/* Health & Beauty Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=300&fit=crop"
            alt="Health & Beauty Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Health & Beauty</h1>
              <p className="text-white/90 text-lg">Premium skincare • Luxury makeup • Beauty essentials</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search beauty products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{updatedBeautyProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>


    </div>
  )
}

// Fashion & Apparel Products Data
const fashionProducts = [
  {
    name: "Levi's 501 Original Fit Jeans",
    url: "https://www.amazon.com/Levis-Original-Stonewash-34Wx32L/dp/B0000DIWUA?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71YQbVoRIcL._AC_UL1500_.jpg",
    description: "Classic straight-leg jeans with authentic styling and premium denim.",
    price: 59.99,
    rating: 4.4,
    reviews: 15420,
    category: "Jeans"
  },
  {
    name: "Nike Air Force 1 '07 Sneakers",
    url: "https://www.amazon.com/Nike-Force-White-White-Size/dp/B077S2JPZX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    description: "Iconic basketball-inspired sneakers with classic white leather design.",
    price: 90.00,
    rating: 4.6,
    reviews: 8934,
    category: "Footwear"
  },
  {
    name: "Champion Powerblend Fleece Hoodie",
    url: "https://www.amazon.com/Champion-Powerblend-Pullover-Hoodie-Sweatshirt/dp/B07BQJBQZX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71VvXGBdgJL._AC_UX679_.jpg",
    description: "Comfortable fleece hoodie with reduced pilling and shrinkage.",
    price: 35.00,
    rating: 4.5,
    reviews: 12567,
    category: "Hoodies"
  },
  {
    name: "Ray-Ban Aviator Classic Sunglasses",
    url: "https://www.amazon.com/Ray-Ban-Aviator-Classic-Sunglasses-RB3025/dp/B001GNBJQ4?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY879_.jpg",
    description: "Timeless aviator sunglasses with crystal lenses and gold frame.",
    price: 154.00,
    rating: 4.7,
    reviews: 6789,
    category: "Accessories"
  },
  {
    name: "Adidas Originals Trefoil T-Shirt",
    url: "https://www.amazon.com/adidas-Originals-Trefoil-T-Shirt-Medium/dp/B01N4NQZK1?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_UX679_.jpg",
    description: "Classic cotton t-shirt featuring the iconic Adidas trefoil logo.",
    price: 25.00,
    rating: 4.3,
    reviews: 9876,
    category: "T-Shirts"
  },
  {
    name: "Kate Spade New York Crossbody Bag",
    url: "https://www.amazon.com/Kate-Spade-York-Cameron-Crossbody/dp/B07QMXVZPX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81fPTYH9PwL._AC_UY695_.jpg",
    description: "Elegant leather crossbody bag with adjustable strap and gold hardware.",
    price: 128.00,
    rating: 4.8,
    reviews: 3456,
    category: "Handbags"
  }
];

function FashionProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Jeans', 'Footwear', 'Hoodies', 'Accessories', 'T-Shirts', 'Handbags']

  const filteredProducts = fashionProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center">
            <SignedOut>
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
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg",
                    userButtonPopoverActionButton: "hover:bg-gray-50"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Fashion & Apparel</span>
        </div>

        {/* Fashion Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=300&fit=crop"
            alt="Fashion Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Fashion & Apparel</h1>
              <p className="text-white/90 text-lg">Discover the latest trends • Premium quality • Express delivery</p>
            </div>
          </div>
        </div>



        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search fashion products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Content Card Header */}
        <div className="mb-8 p-6 rounded-2xl backdrop-blur-xl bg-white/70 shadow-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Fashion Collection</h2>
              <p className="text-gray-600">Discover the latest trends and timeless classics</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{fashionProducts.length}</span> products
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Home & Kitchen Products Data
const homeKitchenProducts = [
  {
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    url: "https://www.amazon.com/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71V9uEMVlJL._AC_SL1500_.jpg",
    description: "7-in-1 multi-cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.",
    price: 79.95,
    rating: 4.6,
    reviews: 89456,
    category: "Kitchen Appliances"
  },
  {
    name: "KitchenAid Stand Mixer",
    url: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Pouring-Shield/dp/B00063ULMI?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81CvxjUzgxL._AC_SL1500_.jpg",
    description: "5-quart tilt-head stand mixer with 10 speeds and multiple attachments for versatile cooking.",
    price: 379.99,
    rating: 4.7,
    reviews: 12890,
    category: "Kitchen Appliances"
  },
  {
    name: "Ninja Foodi Personal Blender",
    url: "https://www.amazon.com/Ninja-BN401-Nutrient-Extraction-Personal/dp/B07GVJJ5VZ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "Personal blender with nutrient extraction technology and to-go cups.",
    price: 79.99,
    rating: 4.5,
    reviews: 8765,
    category: "Small Appliances"
  },
  {
    name: "Pyrex Glass Mixing Bowl Set",
    url: "https://www.amazon.com/Pyrex-Smart-Essentials-Mixing-Clear/dp/B01MXBTYQX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "Set of 3 glass mixing bowls with measurement markings and pour spouts.",
    price: 24.99,
    rating: 4.8,
    reviews: 15678,
    category: "Cookware"
  },
  {
    name: "Calphalon Nonstick Cookware Set",
    url: "https://www.amazon.com/Calphalon-Classic-Nonstick-Cookware-10-piece/dp/B01MXBTYQX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "10-piece nonstick cookware set with dual-layer coating and stay-cool handles.",
    price: 199.99,
    rating: 4.4,
    reviews: 6543,
    category: "Cookware"
  },
  {
    name: "Dyson V15 Detect Cordless Vacuum",
    url: "https://www.amazon.com/Dyson-Detect-Cordless-Vacuum-Cleaner/dp/B08TWQZXPX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Powerful cordless vacuum with laser dust detection and intelligent suction.",
    price: 649.99,
    rating: 4.6,
    reviews: 4321,
    category: "Cleaning"
  }
];

function HomeKitchenProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Kitchen Appliances', 'Small Appliances', 'Cookware', 'Cleaning']

  const filteredProducts = homeKitchenProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center">
            <SignedOut>
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
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg",
                    userButtonPopoverActionButton: "hover:bg-gray-50"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Home & Kitchen</span>
        </div>

        {/* Home & Kitchen Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=300&fit=crop"
            alt="Home & Kitchen Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Home & Kitchen</h1>
              <p className="text-white/90 text-lg">Essential items for your home • Premium appliances • Fast shipping</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search home & kitchen products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Content Card Header */}
        <div className="mb-8 p-6 rounded-2xl backdrop-blur-xl bg-white/70 shadow-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Home & Kitchen Collection</h2>
              <p className="text-gray-600">Essential items for your home and culinary adventures</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-emerald-600">{sortedProducts.length}</span> of <span className="font-semibold">{homeKitchenProducts.length}</span> products
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Sports & Outdoors Products Data
const sportsOutdoorsProducts = [
  {
    name: "YETI Rambler 20 oz Tumbler",
    url: "https://www.amazon.com/YETI-Rambler-Tumbler-Stainless-MagSlider/dp/B073WJ8Q8X?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Double-wall vacuum insulated tumbler with MagSlider lid for hot and cold beverages.",
    price: 35.00,
    rating: 4.8,
    reviews: 23456,
    category: "Drinkware"
  },
  {
    name: "Hydro Flask Water Bottle 32 oz",
    url: "https://www.amazon.com/Hydro-Flask-Water-Bottle-Stainless/dp/B077S2JPZX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 44.95,
    rating: 4.7,
    reviews: 18765,
    category: "Drinkware"
  },
  {
    name: "Coleman Sundome Camping Tent",
    url: "https://www.amazon.com/Coleman-Sundome-Tent-4-Person/dp/B004J2GUOU?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "4-person dome tent with WeatherTec system and easy setup for camping adventures.",
    price: 89.99,
    rating: 4.3,
    reviews: 12890,
    category: "Camping"
  },
  {
    name: "Resistance Bands Set with Handles",
    url: "https://www.amazon.com/Resistance-Bands-Set-Exercise-Workout/dp/B07GVJJ5VZ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "Complete resistance band set with handles, door anchor, and ankle straps for full-body workouts.",
    price: 29.99,
    rating: 4.5,
    reviews: 15432,
    category: "Fitness"
  },
  {
    name: "Nike Dri-FIT Running Shorts",
    url: "https://www.amazon.com/Nike-Dri-FIT-Running-Shorts-Men/dp/B08TWQZXPX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Lightweight running shorts with Dri-FIT technology and built-in brief for comfort.",
    price: 35.00,
    rating: 4.6,
    reviews: 8765,
    category: "Athletic Wear"
  },
  {
    name: "Patagonia Houdini Windbreaker Jacket",
    url: "https://www.amazon.com/Patagonia-Houdini-Windbreaker-Jacket/dp/B01MXBTYQX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71VvXGBdgJL._AC_SL1500_.jpg",
    description: "Ultra-lightweight windbreaker that packs into its own pocket, perfect for outdoor activities.",
    price: 99.00,
    rating: 4.7,
    reviews: 5432,
    category: "Outdoor Clothing"
  }
];

function SportsOutdoorsProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Drinkware', 'Camping', 'Fitness', 'Athletic Wear', 'Outdoor Clothing']

  const filteredProducts = sportsOutdoorsProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center">
            <SignedOut>
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
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "backdrop-blur-xl bg-white/90 border border-white/30 shadow-lg",
                    userButtonPopoverActionButton: "hover:bg-gray-50"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Sports & Outdoors</span>
        </div>

        {/* Sports & Outdoors Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=300&fit=crop"
            alt="Sports & Outdoors Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Sports & Outdoors</h1>
              <p className="text-white/90 text-lg">Gear up for adventure • Premium equipment • Ready to ship</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search sports & outdoor products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Content Card Header */}
        <div className="mb-8 p-6 rounded-2xl backdrop-blur-xl bg-white/70 shadow-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sports & Outdoors Collection</h2>
              <p className="text-gray-600">Gear up for your next adventure with premium outdoor equipment</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-orange-600">{sortedProducts.length}</span> of <span className="font-semibold">{sportsOutdoorsProducts.length}</span> products
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Books & Media Products Data
const booksMediaProducts = [
  {
    name: "Atomic Habits by James Clear",
    url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UY327_FMwebp_QL65_.jpg",
    description: "A proven framework for improving every day with tiny changes that deliver remarkable results.",
    price: 13.49,
    rating: 4.8,
    reviews: 89456,
    category: "Self-Help"
  },
  {
    name: "The Seven Husbands of Evelyn Hugo",
    url: "https://www.amazon.com/Seven-Husbands-Evelyn-Hugo-Novel/dp/1501161938?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Qs0CKQJPL._AC_UY327_FMwebp_QL65_.jpg",
    description: "A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.",
    price: 12.99,
    rating: 4.7,
    reviews: 67890,
    category: "Fiction"
  },
  {
    name: "Educated: A Memoir by Tara Westover",
    url: "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81NbDxJHFdL._AC_UY327_FMwebp_QL65_.jpg",
    description: "A powerful memoir about education, family, and the struggle between loyalty and independence.",
    price: 14.99,
    rating: 4.6,
    reviews: 45678,
    category: "Biography"
  },
  {
    name: "The Psychology of Money by Morgan Housel",
    url: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UY327_FMwebp_QL65_.jpg",
    description: "Timeless lessons on wealth, greed, and happiness from behavioral psychology.",
    price: 15.99,
    rating: 4.7,
    reviews: 34567,
    category: "Business"
  },
  {
    name: "Where the Crawdads Sing by Delia Owens",
    url: "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81O2ZjVoiIL._AC_UY327_FMwebp_QL65_.jpg",
    description: "A coming-of-age mystery novel set in the marshlands of North Carolina.",
    price: 13.99,
    rating: 4.5,
    reviews: 78901,
    category: "Fiction"
  },
  {
    name: "Kindle Paperwhite E-reader",
    url: "https://www.amazon.com/Kindle-Paperwhite-adjustable-Ad-Supported/dp/B08KTZ8249?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61SVPf8Jl7L._AC_SL1000_.jpg",
    description: "Waterproof e-reader with 6.8\" display and adjustable warm light for comfortable reading.",
    price: 139.99,
    rating: 4.6,
    reviews: 23456,
    category: "E-readers"
  }
];

function BooksMediaProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Self-Help', 'Fiction', 'Biography', 'Business', 'E-readers']

  const filteredProducts = booksMediaProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Books & Media</span>
        </div>

        {/* Books & Media Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=300&fit=crop"
            alt="Books & Media Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Books & Media</h1>
              <p className="text-white/90 text-lg">Discover great reads • Digital media • Knowledge delivered</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search books & media..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-amber-600">{sortedProducts.length}</span> of <span className="font-semibold">{booksMediaProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Toys & Games Products Data
const toysGamesProducts = [
  {
    name: "LEGO Creator 3-in-1 Deep Sea Creatures",
    url: "https://www.amazon.com/LEGO-Creator-Deep-Sea-Creatures/dp/B08HVZB8YR?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_SL1500_.jpg",
    description: "Build a shark, squid, or angler fish with this creative 3-in-1 LEGO set.",
    price: 15.99,
    rating: 4.8,
    reviews: 12345,
    category: "Building Sets"
  },
  {
    name: "Monopoly Classic Board Game",
    url: "https://www.amazon.com/Monopoly-Classic-Board-Game/dp/B00CV5PN2W?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81Qs0CKQJPL._AC_SL1500_.jpg",
    description: "The classic property trading game that brings families together for hours of fun.",
    price: 19.99,
    rating: 4.6,
    reviews: 23456,
    category: "Board Games"
  },
  {
    name: "Hot Wheels 20-Car Gift Pack",
    url: "https://www.amazon.com/Hot-Wheels-20-Car-Gift-Pack/dp/B07GVJJ5VZ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81NbDxJHFdL._AC_SL1500_.jpg",
    description: "Collection of 20 Hot Wheels die-cast cars with authentic details and decorations.",
    price: 19.97,
    rating: 4.7,
    reviews: 8765,
    category: "Die-Cast Cars"
  },
  {
    name: "Rubik's Cube 3x3 Puzzle",
    url: "https://www.amazon.com/Rubiks-Cube-3x3-Puzzle-Original/dp/B0040GQNTO?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "The original 3x3 color-matching puzzle that's a great mental challenge for all ages.",
    price: 9.99,
    rating: 4.5,
    reviews: 15678,
    category: "Puzzles"
  },
  {
    name: "Nerf Elite 2.0 Commander Blaster",
    url: "https://www.amazon.com/Nerf-Elite-Commander-Blaster-Official/dp/B084DQZR8X?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "Motorized blaster with 6-dart rotating drum and includes 12 Official Nerf darts.",
    price: 24.99,
    rating: 4.4,
    reviews: 6789,
    category: "Action Toys"
  },
  {
    name: "Play-Doh Modeling Compound 10-Pack",
    url: "https://www.amazon.com/Play-Doh-Modeling-Compound-10-Pack/dp/B00JM5GW10?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_SL1500_.jpg",
    description: "Classic modeling compound in 10 bright colors for endless creative possibilities.",
    price: 9.99,
    rating: 4.8,
    reviews: 34567,
    category: "Arts & Crafts"
  }
];

function ToysGamesProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Building Sets', 'Board Games', 'Die-Cast Cars', 'Puzzles', 'Action Toys', 'Arts & Crafts']

  const filteredProducts = toysGamesProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Toys & Games</span>
        </div>

        {/* Toys & Games Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=300&fit=crop"
            alt="Toys & Games Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Toys & Games</h1>
              <p className="text-white/90 text-lg">Fun for all ages • Educational toys • Play and learn</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search toys & games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-red-600">{sortedProducts.length}</span> of <span className="font-semibold">{toysGamesProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Automotive Products Data
const automotiveProducts = [
  {
    name: "Chemical Guys Car Wash Kit",
    url: "https://www.amazon.com/Chemical-Guys-HOL126-Complete-Wash/dp/B00FQMGZIK?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_SL1500_.jpg",
    description: "Complete car wash and detailing kit with premium soaps, microfiber towels, and accessories.",
    price: 49.99,
    rating: 4.6,
    reviews: 8765,
    category: "Car Care"
  },
  {
    name: "Armor All Car Interior Cleaner",
    url: "https://www.amazon.com/Armor-All-Interior-Cleaner-Protectant/dp/B000AL8VD2?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "Multi-surface cleaner and protectant for dashboards, vinyl, plastic, and leather.",
    price: 12.99,
    rating: 4.4,
    reviews: 15432,
    category: "Car Care"
  },
  {
    name: "Anker Roav DashCam C1",
    url: "https://www.amazon.com/Roav-DashCam-Recorder-Nighthawk-Vision/dp/B077GFQZPX?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Compact dash camera with 1080p recording, night vision, and wide-angle lens.",
    price: 89.99,
    rating: 4.3,
    reviews: 6789,
    category: "Electronics"
  },
  {
    name: "WeatherTech All-Weather Floor Mats",
    url: "https://www.amazon.com/WeatherTech-Custom-All-Weather-Floor/dp/B000BD8KZS?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "Custom-fit floor mats designed to protect your vehicle's carpet from mud, snow, and spills.",
    price: 129.95,
    rating: 4.7,
    reviews: 12345,
    category: "Interior Accessories"
  },
  {
    name: "Bosch ICON Windshield Wipers",
    url: "https://www.amazon.com/Bosch-ICON-Wiper-Blade-Pack/dp/B000C24F0U?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "Premium beam wiper blades with exclusive dual rubber technology for superior performance.",
    price: 34.99,
    rating: 4.5,
    reviews: 9876,
    category: "Maintenance"
  },
  {
    name: "NOCO Boost Plus GB40 Jump Starter",
    url: "https://www.amazon.com/NOCO-Boost-UltraSafe-Lithium-Starter/dp/B015TKUPIC?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_SL1500_.jpg",
    description: "Portable lithium jump starter for 12V batteries up to 6L gas and 3L diesel engines.",
    price: 99.95,
    rating: 4.6,
    reviews: 23456,
    category: "Emergency Equipment"
  }
];

function AutomotiveProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Car Care', 'Electronics', 'Interior Accessories', 'Maintenance', 'Emergency Equipment']

  const filteredProducts = automotiveProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Automotive</span>
        </div>

        {/* Automotive Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=300&fit=crop"
            alt="Automotive Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Automotive</h1>
              <p className="text-white/90 text-lg">Vehicle essentials • Quality parts • Performance upgrades</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search automotive products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-slate-600">{sortedProducts.length}</span> of <span className="font-semibold">{automotiveProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
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

// Health & Wellbeing Products Data
const healthWellbeingProducts = [
  {
    name: "Fitbit Charge 5 Fitness Tracker",
    url: "https://www.amazon.com/Fitbit-Charge-Fitness-Tracker-Management/dp/B09DFCZ6T1?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Advanced fitness tracker with built-in GPS, stress management, and health metrics.",
    price: 149.95,
    rating: 4.4,
    reviews: 12890,
    category: "Fitness Trackers"
  },
  {
    name: "Theragun Mini Percussive Therapy Device",
    url: "https://www.amazon.com/Theragun-Mini-Percussive-Therapy-Device/dp/B07GVJJ5VZ?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "Portable massage device for muscle recovery and pain relief on-the-go.",
    price: 179.00,
    rating: 4.6,
    reviews: 8765,
    category: "Recovery Tools"
  },
  {
    name: "Nature Made Multivitamin for Adults",
    url: "https://www.amazon.com/Nature-Made-Multivitamin-Adults-Tablets/dp/B000NPYY04?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "Complete multivitamin with essential nutrients for daily health support.",
    price: 19.99,
    rating: 4.5,
    reviews: 23456,
    category: "Supplements"
  },
  {
    name: "Philips SmartSleep Wake-up Light",
    url: "https://www.amazon.com/Philips-SmartSleep-Wake-up-Light-Therapy/dp/B0093162RM?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "Sunrise alarm clock with light therapy to improve sleep and wake naturally.",
    price: 199.95,
    rating: 4.3,
    reviews: 6789,
    category: "Sleep Aids"
  },
  {
    name: "Gaiam Yoga Mat Premium",
    url: "https://www.amazon.com/Gaiam-Yoga-Mat-Premium-Print/dp/B01M8G39OW?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_SL1500_.jpg",
    description: "Non-slip yoga mat with superior cushioning for comfortable practice.",
    price: 39.98,
    rating: 4.7,
    reviews: 15678,
    category: "Exercise Equipment"
  },
  {
    name: "Himalayan Pink Salt Lamp",
    url: "https://www.amazon.com/Himalayan-Glow-Natural-Crystal-Lamp/dp/B013T8BSQY?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Natural crystal salt lamp for air purification and ambient lighting.",
    price: 24.99,
    rating: 4.4,
    reviews: 9876,
    category: "Wellness"
  }
];

function HealthWellbeingProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Fitness Trackers', 'Recovery Tools', 'Supplements', 'Sleep Aids', 'Exercise Equipment', 'Wellness']

  const filteredProducts = healthWellbeingProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Health & Wellbeing</span>
        </div>

        {/* Health & Wellbeing Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=300&fit=crop"
            alt="Health & Wellbeing Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Health & Wellbeing</h1>
              <p className="text-white/90 text-lg">Wellness essentials • Fitness gear • Healthy living</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search health & wellbeing products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{healthWellbeingProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

// AI Tools Products Data
const aiToolsProducts = [
  {
    name: "ChatGPT Plus Subscription",
    url: "https://openai.com/chatgpt/pricing?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "Advanced AI assistant for writing, coding, analysis, and creative tasks with GPT-4 access.",
    price: 20.00,
    rating: 4.8,
    reviews: 45678,
    category: "AI Assistants"
  },
  {
    name: "Midjourney AI Art Generator",
    url: "https://midjourney.com/pricing?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    description: "Create stunning AI-generated artwork and images from text descriptions.",
    price: 10.00,
    rating: 4.7,
    reviews: 23456,
    category: "AI Art"
  },
  {
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81VvXGBdgJL._AC_SL1500_.jpg",
    description: "AI-powered code completion and programming assistant for developers.",
    price: 10.00,
    rating: 4.6,
    reviews: 34567,
    category: "Development Tools"
  },
  {
    name: "Notion AI",
    url: "https://notion.so/product/ai?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Iq2JTjVyL._AC_SL1500_.jpg",
    description: "AI-powered writing assistant integrated into Notion for enhanced productivity.",
    price: 8.00,
    rating: 4.5,
    reviews: 12890,
    category: "Productivity"
  },
  {
    name: "Jasper AI Writing Assistant",
    url: "https://jasper.ai/pricing?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_SL1500_.jpg",
    description: "AI content creation platform for marketing copy, blog posts, and social media.",
    price: 39.00,
    rating: 4.4,
    reviews: 8765,
    category: "Content Creation"
  },
  {
    name: "Runway ML Video Editor",
    url: "https://runwayml.com/pricing?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/61HMZTjlSQL._AC_SL1500_.jpg",
    description: "AI-powered video editing and generation tools for creative professionals.",
    price: 15.00,
    rating: 4.3,
    reviews: 6789,
    category: "Video Tools"
  }
];

function AIToolsProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'AI Assistants', 'AI Art', 'Development Tools', 'Productivity', 'Content Creation', 'Video Tools']

  const filteredProducts = aiToolsProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
      setIsLoading(false)
    }, 150)
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">AI Tools</span>
        </div>

        {/* AI Tools Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=300&fit=crop"
            alt="AI Tools Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">AI Tools</h1>
              <p className="text-white/90 text-lg">Cutting-edge AI • Productivity tools • Future technology</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-xl bg-white/50"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{aiToolsProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

function slugifyCategory(cat) {
  return cat
    .toLowerCase()
    .replace(/\s*&\s*/g, '-') // replace ' & ' with '-'
    .replace(/\s+/g, '-')      // replace spaces with '-'
    .replace(/-+/g, '-')        // collapse multiple dashes
    .replace(/[^a-z0-9-]/g, ''); // remove non-alphanumeric except dash
}

function ProductDetailPage({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('details')
  const navigate = useNavigate()

  // Enhanced product data with defaults
  const productData = product || {
    name: "Test Product",
    url: "https://example.com",
    image: "https://placehold.co/400x250/4F46E5/FFFFFF?text=Test+Product",
    description: "This is a test product to verify the component works.",
    price: 99.99,
    currency: 'USD',
    rating: 4.8,
    reviews: 1247,
    category: "Test Category",
    brand: "Test Brand",
    availability: "In Stock",
    shipping: "Free Shipping",
    features: [
      "High-quality materials",
      "Durable construction",
      "Easy to use",
      "Great value for money",
      "Customer satisfaction guaranteed"
    ],
    specifications: {
      "Material": "Premium quality",
      "Weight": "2.5 lbs",
      "Dimensions": "10 x 8 x 4 inches",
      "Warranty": "1 year",
      "Origin": "Made in USA"
    }
  }

  const productImages = [
    productData.image,
    "https://placehold.co/400x400/4F46E5/FFFFFF?text=Product+Image+2",
    "https://placehold.co/400x400/7C3AED/FFFFFF?text=Product+Image+3",
    "https://placehold.co/400x400/EC4899/FFFFFF?text=Product+Image+4"
  ]

  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      date: "2 days ago",
      title: "Excellent product!",
      comment: "This product exceeded my expectations. Great quality and fast shipping."
    },
    {
      id: 2,
      user: "John D.",
      rating: 4,
      date: "1 week ago",
      title: "Good value",
      comment: "Solid product for the price. Would recommend to others."
    },
    {
      id: 3,
      user: "Emma L.",
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect!",
      comment: "Exactly what I was looking for. Very satisfied with my purchase."
    }
  ]

  const relatedProducts = [
    {
      name: "Related Product 1",
      price: 79.99,
      image: "https://placehold.co/200x200/4F46E5/FFFFFF?text=Related+1",
      rating: 4.6,
      reviews: 892
    },
    {
      name: "Related Product 2",
      price: 89.99,
      image: "https://placehold.co/200x200/7C3AED/FFFFFF?text=Related+2",
      rating: 4.7,
      reviews: 567
    },
    {
      name: "Related Product 3",
      price: 69.99,
      image: "https://placehold.co/200x200/EC4899/FFFFFF?text=Related+3",
      rating: 4.5,
      reviews: 423
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Translucent Header Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 py-3 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-xl">🌍</span>
              <div className="text-lg font-bold tracking-tighter">
                <span className="mr-[-2px]">1</span>MarketLive
              </div>
            </button>
            <div className="relative flex items-center bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-gray-600 w-56 md:w-80 border border-white/30">
              <Search size={14} className="mr-2 text-gray-500" />
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <button 
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-xs transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400 text-xs">/</span>
          <span className="text-gray-600 text-xs">{productData.category}</span>
          <span className="text-gray-400 text-xs">/</span>
          <span className="text-gray-600 text-xs truncate">{productData.name}</span>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-4 border border-white/30 shadow-lg">
              <div className="aspect-square overflow-hidden rounded-lg mb-3">
                <img
                  src={productImages[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { 
                    e.target.onerror = null
                    e.target.src = `https://placehold.co/400x400/4F46E5/FFFFFF?text=${productData.name}`
                  }}
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productData.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { 
                        e.target.onerror = null
                        e.target.src = `https://placehold.co/64x64/4F46E5/FFFFFF?text=Image+${index + 1}`
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                  {productData.brand}
                </span>
                <h1 className="text-lg font-bold text-gray-900 mb-1">{productData.name}</h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {renderStars(productData.rating)}
                  </div>
                  <span className="text-xs font-medium text-gray-900">{productData.rating}</span>
                  <span className="text-xs text-gray-500">({productData.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3">${productData.price}</div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">{productData.availability}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">{productData.shipping}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex space-x-2">
                  <a
                    href={productData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <button className="px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Heart size={16} />
                  </button>
                  <button className="px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Share2 size={16} />
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#635BFF] text-white text-center py-2 rounded-lg hover:bg-[#5851EC] transition-colors duration-200 text-sm font-medium">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.127 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C7.466 22.924 9.848 24 13.164 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h6.147z"/>
                      </svg>
                      <span>Pay with Stripe</span>
                    </div>
                  </button>
                  <button className="flex-1 bg-[#FFC439] text-[#003087] text-center py-2 rounded-lg hover:bg-[#F4BB33] transition-colors duration-200 text-sm font-medium">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.067 8.478c.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.478-1.844.478H5.777c-.681 0-1.352-.163-1.844-.478C3.441 12.819 3.089 12.309 3.089 11.656c0-.653.352-1.163.844-1.478.492-.315 1.163-.478 1.844-.478h12.446c.681 0 1.352.163 1.844.478zM7.777 15.656c0-.653.352-1.163.844-1.478.492-.315 1.163-.478 1.844-.478h8.446c.681 0 1.352.163 1.844.478.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.478-1.844-.478h-8.446c-.681 0-1.352-.163-1.844-.478-.492-.315-.844-.825-.844-1.478z"/>
                      </svg>
                      <span>PayPal</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-6">
          <div className="flex backdrop-blur-xl bg-white/50 rounded-xl p-1 border border-white/30 shadow-lg w-fit">
            {[
              { id: 'details', label: 'Product Details' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'related', label: 'Related Products' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'details' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Description */}
              <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-base font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{productData.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-base font-bold text-gray-900 mb-3">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-gray-100 last:border-b-0">
                      <span className="text-xs text-gray-600 font-medium">{key}</span>
                      <span className="text-xs text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">Customer Reviews</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(productData.rating)}
                  </div>
                  <span className="text-sm font-bold text-gray-900">{productData.rating}</span>
                  <span className="text-xs text-gray-500">({productData.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{review.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-xs text-gray-500">by {review.user}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-400">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'related' && (
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
              <h3 className="text-base font-bold text-gray-900 mb-4">Related Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProducts.map((relatedProduct, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="backdrop-blur-xl bg-white/30 rounded-lg p-3 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="aspect-square overflow-hidden rounded-lg mb-2">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => { 
                            e.target.onerror = null
                            e.target.src = `https://placehold.co/200x200/4F46E5/FFFFFF?text=Related+${index + 1}`
                          }}
                        />
                      </div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2">{relatedProduct.name}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star size={10} className="text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{relatedProduct.rating}</span>
                          <span className="text-xs text-gray-400">({relatedProduct.reviews})</span>
                        </div>
                        <span className="text-xs font-bold text-gray-900">${relatedProduct.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Electronics Products Data
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
  },
  {
    name: "Sony WH-1000XM5",
    url: "https://www.amazon.com/Sony-WH-1000XM5-Canceling-Headphones-phone-call/dp/B09Y2MYL5C?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    price: 349.99,
    rating: 4.8,
    reviews: 2341,
    category: "Audio"
  },
  {
    name: "iPad Air 5th Generation",
    url: "https://www.amazon.com/Apple-iPad-Air-10-9-inch-Wi-Fi/dp/B09V3HN1KC?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Powerful tablet with M1 chip, all-screen design, and Apple Pencil support.",
    price: 599.99,
    rating: 4.9,
    reviews: 1567,
    category: "Tablets"
  },
  {
    name: "Apple Watch Series 9",
    url: "https://www.amazon.com/Apple-Watch-Series-GPS-45mm/dp/B0CJ7XQ8YH?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Advanced health monitoring, fitness tracking, and seamless iPhone integration.",
    price: 399.99,
    rating: 4.8,
    reviews: 892,
    category: "Wearables"
  },
  {
    name: "Canon EOS R6 Mark II",
    url: "https://www.amazon.com/Canon-EOS-R6-Mark-II/dp/B0BL6Y3H8L?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Professional mirrorless camera with 24.2MP sensor and 4K video recording.",
    price: 2499.99,
    rating: 4.9,
    reviews: 234,
    category: "Cameras"
  },
  {
    name: "DJI Mini 3 Pro",
    url: "https://www.amazon.com/DJI-Mini-3-Pro-Drone/dp/B09V3HN1KC?tag=1mlaffiliates-20",
    image: "https://images-na.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_SL1500_.jpg",
    description: "Ultra-lightweight drone with 4K camera and advanced obstacle avoidance.",
    price: 759.99,
    rating: 4.7,
    reviews: 445,
    category: "Drones"
  }
];

function ElectronicsProducts() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const categories = ['All', 'Smartphones', 'Laptops', 'Tablets', 'Audio', 'Wearables', 'Cameras', 'Drones']

  const filteredProducts = electronicsProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name)
      case 'price': return a.price - b.price
      case 'rating': return b.rating - a.rating
      case 'reviews': return b.reviews - a.reviews
      default: return 0
    }
  })

  const handleProductClick = (product) => {
    setIsLoading(true)
    setTimeout(() => {
      // Map specific products to their dedicated routes
      let productUrl;
      switch (product.name) {
        case "MacBook Air M2":
          productUrl = "/product/macbook-air-m2";
          break;
        case "iPhone 15 Pro Max":
          productUrl = "/product/iphone-15-pro-max";
          break;
        case "Samsung Galaxy S24 Ultra":
          productUrl = "/product/samsung-galaxy-s24-ultra";
          break;
        default:
          // Fallback to slug-based URL for other products
          productUrl = `/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`;
      }
      navigate(productUrl)
      setIsLoading(false)
    }, 150)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
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
              <span>Search MLN...</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <button 
            onClick={() => navigate('/categories')}
            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
          >
            Categories
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">Electronics</span>
        </div>

        {/* Electronics Banner Card */}
        <div className="relative mb-8 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=300&fit=crop"
            alt="Electronics Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8">
              <h1 className="text-3xl font-bold text-white mb-2">Electronics</h1>
              <p className="text-white/90 text-lg">Latest technology • Top brands • Innovation delivered</p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search electronics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm placeholder-gray-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none backdrop-blur-xl bg-white/70 shadow-sm"
            >
              <option value="name">Name</option>
              <option value="price">Price: Low to High</option>
              <option value="rating">Rating</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Content Card Header */}
        <div className="mb-8 p-6 rounded-2xl backdrop-blur-xl bg-white/70 shadow-sm border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Electronics Collection</h2>
              <p className="text-gray-600">Cutting-edge technology and innovative gadgets from leading brands</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{electronicsProducts.length}</span> products
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProductCard({ product, onClick }) {
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
      className={`group relative cursor-pointer transition-all duration-300 ${
        isPressed ? 'scale-95' : isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      {/* Clean Card Design */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = `https://placehold.co/400x300/4F46E5/FFFFFF?text=${product.name}`
            }}
          />
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              {product.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating & Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{product.rating}</span>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
            <div className="text-lg font-bold text-gray-900">
              ${product.price}
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

const HomePageContent = () => {
  const navigate = useNavigate();
  const [modalCard, setModalCard] = useState(null);
  const [marketplaceOpen, setMarketplaceOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);


  let marketplaceTimeout = null;
  let financeTimeout = null;

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Translucent Header Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 py-3 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-xl">🌍</span>
              <div className="text-lg font-bold tracking-tighter">
                <span className="mr-[-2px]">1</span>MarketLive
              </div>
            </button>
            <div className="relative flex items-center bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-gray-600 w-56 md:w-80 border border-white/30">
              <Search size={14} className="mr-2 text-gray-500" />
              <span>Search MLN...</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors duration-200">Resources</a>
            <a href="#" className="hover:text-blue-600 transition-colors duration-200">Solutions</a>
            <div className="relative"
              onMouseEnter={() => { clearTimeout(marketplaceTimeout); setMarketplaceOpen(true); }}
              onMouseLeave={() => { marketplaceTimeout = setTimeout(() => setMarketplaceOpen(false), 150); }}
            >
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">Marketplace</button>
              {marketplaceOpen && (
                <div className="absolute left-0 mt-2 w-48 backdrop-blur-xl bg-white/90 border border-white/30 rounded-xl shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/categories"
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-white/50 cursor-pointer transition-colors duration-200 font-semibold border-b border-gray-200"
                        onClick={() => setMarketplaceOpen(false)}
                      >
                        All Categories
                      </Link>
                    </li>
                    {categories.map((cat, idx) => (
                      <li key={cat}>
                        <Link
                          to={`/category/${slugifyCategory(cat)}`}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-white/50 cursor-pointer transition-colors duration-200"
                          onClick={() => setMarketplaceOpen(false)}
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative"
              onMouseEnter={() => { clearTimeout(financeTimeout); setFinanceOpen(true); }}
              onMouseLeave={() => { financeTimeout = setTimeout(() => setFinanceOpen(false), 150); }}
            >
              <button className="hover:text-blue-600 focus:outline-none transition-colors duration-200">Finance</button>
              {financeOpen && (
                <div className="absolute left-0 mt-2 w-48 backdrop-blur-xl bg-white/90 border border-white/30 rounded-xl shadow-lg z-50">
                  <ul className="py-2">
                    {[
                      { name: 'News', route: '/news' },
                      { name: 'Dashboard', route: '/dashboard' },
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
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-white/50 cursor-pointer transition-colors duration-200"
                          onClick={() => setFinanceOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-600 transition-colors duration-200">About</a>
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

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Welcome to 1MarketLive
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg opacity-90">
              Discover the world's finest products and insights
            </p>
            <button 
              onClick={() => navigate('/categories')}
              className="backdrop-blur-xl bg-white/20 text-white px-8 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium"
            >
              Explore Categories
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsCardsData.map((card, i) => (
            <div
              key={i}
              className="group cursor-pointer relative"
              onClick={() => navigate(`/category/${slugifyCategory(card.headline)}`)}
            >
              <div className="backdrop-blur-xl bg-white/50 rounded-xl overflow-hidden border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.headline}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/4F46E5/FFFFFF?text=Category"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{card.headline}</h3>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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

      {/* Featured Articles Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* First row: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {newMediaCardsData.slice(0, 2).map((card, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/50 rounded-xl overflow-hidden border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.headline}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/4F46E5/FFFFFF?text=Article'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 leading-snug">{card.headline}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        {card.source && <span className="font-medium">{card.source}</span>}
                        {card.time && <span className="text-gray-300">• {card.time}</span>}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp size={14} className="text-gray-300" />
                          <span className="text-xs">{card.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare size={14} className="text-gray-300" />
                          <span className="text-xs">{card.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row: 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newMediaCardsData.slice(2, 6).map((card, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/50 rounded-xl overflow-hidden border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.headline}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/4F46E5/FFFFFF?text=Article'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-base font-bold mb-2 leading-snug line-clamp-2">{card.headline}</h3>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1">
                        {card.source && <span className="font-medium">{card.source}</span>}
                        {card.time && <span className="text-gray-300">• {card.time}</span>}
                      </div>
                      <div className="flex items-center space-x-2">
                        <ThumbsUp size={12} className="text-gray-300" />
                        <span>{card.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-xl bg-white/50 border-t border-white/30 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl">🌍</span>
                <div className="text-lg font-bold tracking-tighter ml-2">
                  <span className="mr-[-2px]">1</span>MarketLive
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Smart Finance Starts Here. Discover the best products, news, and tools for your financial journey.</p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Deals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">AI Tools</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a></li>
              </ul>
            </div>
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Tech</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Fashion</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Coupons</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@mln.app" className="text-gray-600 hover:text-blue-600 transition-colors">hello@mln.app</a></li>
                <li><a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600 transition-colors">+1 (555) 123-4567</a></li>
                <li className="text-gray-600">London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/30 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div>&copy; {new Date().getFullYear()} 1MarketLive. All rights reserved. Smart Finance Starts Here.</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy & Cookies</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Advertise</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Data Providers</a>
            </div>
          </div>
        </div>
      </footer>
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

export {
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
};
export default HomePageContent; 