import React, { useState, useEffect } from 'react';
import { Search, Settings, Cloud, Newspaper, ShoppingCart, ThumbsUp, Bookmark, PlayCircle, Heart, Share2, MessageSquare, Briefcase, SlidersHorizontal, User, Star } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router-dom';



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

const beautyProducts = [
  {
    name: "Medicube One Day Exosome Shot 2000 Serum",
    url: "https://www.amazon.com/Medicube-One-Day-Exosome-2000/dp/B0D137TMRB?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Medicube+Exosome+Shot+2000+Serum",
    description: "Medicube One Day Exosome Shot 2000 Serum."
  },
  {
    name: "BRUUN SD Salmon DNA PDRN Ampoule",
    url: "https://www.amazon.com/BR%C3%9CUN-SD-Control-Needling-Microneedling/dp/B08ZYXPGZJ?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=BRUUN+SD+Salmon+DNA+PDRN+Ampoule",
    description: "BRUUN SD Salmon DNA PDRN Ampoule."
  },
  {
    name: "TOSOWOONG Pink Peptide 12 PDRN Serum",
    url: "https://www.amazon.com/TOSOWOONG-Peptides-Niacinamide-Hydrating-Moisturizing/dp/B0DRJX22GS?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=TOSOWOONG+Pink+Peptide+12+PDRN+Serum",
    description: "TOSOWOONG Pink Peptide 12 PDRN Serum."
  },
  {
    name: "Medicube Collagen Overnight Wrapping Mask",
    url: "https://www.amazon.com/Medicube-Collagen-Wrapping-Elasticity-Hydration/dp/B0BRMYHMS5?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Medicube+Collagen+Overnight+Wrapping+Mask",
    description: "Medicube Collagen Overnight Wrapping Mask."
  },
  {
    name: "100 Dalton Ultra-Low Bio Collagen Gel Mask",
    url: "https://www.amazon.com/Korean-Collagen-Face-Mask-Overnight/dp/B0DWFYGN33?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=100+Dalton+Ultra-Low+Bio+Collagen+Gel+Mask",
    description: "100 Dalton Ultra-Low Bio Collagen Gel Mask."
  },
  {
    name: "Medicube Zero Exosome Shot Duo",
    url: "https://www.amazon.com/medicube-Zero-Exosome-Shot-2000/dp/B0DM4Y4HFF?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Medicube+Zero+Exosome+Shot+Duo",
    description: "Medicube Zero Exosome Shot Duo."
  },
  {
    name: "Fastaid 7-in-1 LED Face & Neck Massager",
    url: "https://www.amazon.com/Fastaid-Red-Light-Therapy-Face-Therapy-Massager/dp/B0C46HHJJZ?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Fastaid+7-in-1+LED+Face+%26+Neck+Massager",
    description: "Fastaid 7-in-1 LED Face & Neck Massager."
  },
  {
    name: "Anyork LED Facial Roller Massager",
    url: "https://www.amazon.com/Facial-Massage-Dual-Head-Therapy-Electric/dp/B0DTFBSP1S?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Anyork+LED+Facial+Roller+Massager",
    description: "Anyork LED Facial Roller Massager."
  },
  {
    name: "Medicube Salmon DNA PDRN Pink One Day Serum",
    url: "https://www.amazon.com/medicube-Intensive-Collagen-Glutathione-Hyaluronic/dp/B0DBF65JYY?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Medicube+Salmon+DNA+PDRN+Pink+One+Day+Serum",
    description: "Medicube Salmon DNA PDRN Pink One Day Serum."
  },
  {
    name: "Medicube Kojic Acid Turmeric Wrapping Mask",
    url: "https://www.amazon.com/medicube-Kojic-Turmeric-Overnight-Wrapping/dp/B0DRNR67MJ?tag=1mlaffiliates-20",
    image: "https://placehold.co/400x250?text=Medicube+Kojic+Acid+Turmeric+Wrapping+Mask",
    description: "Medicube Kojic Acid Turmeric Wrapping Mask."
  }
];

function BeautyProducts() {
  return <CategoryProductPage title="Beauty Products" products={beautyProducts} />;
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
      navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`)
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

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl">💻</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Electronics
            </h1>
            <span className="text-3xl">📱</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest in technology and gadgets from top brands worldwide
          </p>
        </div>

        {/* Filters */}
        <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-6 border border-white/30 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
              <input
                type="text"
                placeholder="Search electronics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
              >
                <option value="name">Name</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Rating</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-blue-600">{sortedProducts.length}</span> of <span className="font-semibold">{electronicsProducts.length}</span> products
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
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
            <div className="backdrop-blur-sm bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-gray-700 border border-white/30">
              {product.category}
            </div>
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
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

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="flex space-x-2">
              <button
                className="flex-1 bg-blue-600 text-white text-center py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 text-sm font-medium transform hover:scale-105"
              >
                View Details
              </button>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white text-center py-2 rounded-xl hover:bg-green-700 transition-colors duration-200 text-sm font-medium transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <button className="hover:text-blue-600 transition-colors duration-200 p-1" aria-label="Account" onClick={() => navigate('/login')}>
              <User size={18} />
            </button>
            <button className="hover:text-blue-600 transition-colors duration-200 p-1" aria-label="Search">
              <Search size={18} />
            </button>
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

export { CategoryPlaceholder, BeautyProducts, CategoryProductPage, ElectronicsProducts };
export default HomePageContent; 