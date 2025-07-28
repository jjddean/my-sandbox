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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
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

          {/* Middle Column - Product Info */}
          <div className="space-y-6">
            <div className="mb-2">
              <span className="text-sm text-blue-600 font-medium">{productData.brand}</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{productData.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {renderStars(productData.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                ${productData.price.toLocaleString()}
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  {productData.availability}
                </span>
                <span className="text-sm text-gray-600">{productData.shipping}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Purchase Options */}
          <div className="space-y-4">
            {/* Payment Buttons */}
            <div className="space-y-3">
              <a
                href={productData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center py-2.5 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
              >
                Buy on Amazon
              </a>
              <button className="w-full bg-purple-600 text-white py-2.5 px-4 rounded-full hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                $ Pay with Stripe
              </button>
              <button className="w-full bg-yellow-500 text-white py-2.5 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-200 text-sm font-medium">
                ≡ Pay with PayPal
              </button>
            </div>

            {/* Expert Research */}
            <div className="backdrop-blur-xl bg-white/50 rounded-xl p-4 border border-white/30 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Expert Research</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Verified</span>
              </div>

              {productData.researchData ? (
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-2">Problem Solved</h4>
                    <p className="text-gray-700">{productData.researchData.problemSolved}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-2">Trending On</h4>
                    <div className="flex flex-wrap gap-1">
                      {productData.researchData.trendingOn.map((platform, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <div className="font-semibold text-green-800">{productData.researchData.markupPotential}</div>
                      <div className="text-xs text-green-600">Markup Potential</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2 text-center">
                      <div className="font-semibold text-purple-800">High</div>
                      <div className="text-xs text-purple-600">Demand Level</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-2">Arbitrage Opportunity</h4>
                    <p className="text-gray-700 text-xs">{productData.researchData.arbitrageOpportunity}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {productData.researchData.keyBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>95% Reliability Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Expert Recommended</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Best Value in Category</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="flex backdrop-blur-xl bg-white/50 rounded-xl p-1 border border-white/30 shadow-lg">
              {[
                { id: 'details', label: 'Product Details' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'related', label: 'Related Products' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
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