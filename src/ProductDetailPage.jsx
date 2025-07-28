import React, { useState } from 'react';
import { Search, Star, Heart, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
                    className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xs font-medium"
                  >
                    Buy on Amazon
                  </a>
                  <button className="px-3 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Heart size={14} />
                  </button>
                  <button className="px-3 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Share2 size={14} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-[#635BFF] text-white text-center py-2.5 rounded-lg hover:bg-[#5851EC] transition-colors duration-200 text-xs font-medium">
                    <div className="flex items-center justify-center space-x-1.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.127 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C7.466 22.924 9.848 24 13.164 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h6.147z"/>
                      </svg>
                      <span>Stripe</span>
                    </div>
                  </button>
                  <button className="bg-[#FFC439] text-[#003087] text-center py-2.5 rounded-lg hover:bg-[#F4BB33] transition-colors duration-200 text-xs font-medium">
                    <div className="flex items-center justify-center space-x-1.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.067 8.478c.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.478-1.844.478H5.777c-.681 0-1.352-.163-1.844-.478C3.441 12.819 3.089 12.309 3.089 11.656c0-.653.352-1.163.844-1.478.492-.315 1.163-.478 1.844-.478h12.446c.681 0 1.352.163 1.844.478zM7.777 15.656c0-.653.352-1.163.844-1.478.492-.315 1.163-.478 1.844-.478h8.446c.681 0 1.352.163 1.844.478.492.315.844.825.844 1.478 0 .653-.352 1.163-.844 1.478-.492.315-1.163.478-1.844-.478h-8.446c-.681 0-1.352-.163-1.844-.478-.492-.315-.844-.825-.844-1.478z"/>
                      </svg>
                      <span>PayPal</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Research Review Content Card */}
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-6 border border-white/30 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Expert Research & Reviews</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Verified</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Performance Analysis</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Based on extensive testing and user feedback, this product delivers exceptional performance in its category with consistent reliability ratings above 95%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Value Assessment</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Competitive pricing analysis shows this product offers superior value compared to similar alternatives, with 23% better price-to-performance ratio.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Expert Recommendation</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Recommended by industry experts and verified buyers. Consistently rated as a top choice in independent product comparisons and buyer guides.</p>
                  </div>
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

export default ProductDetailPage; 