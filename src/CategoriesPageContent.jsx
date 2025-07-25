import React, { useState } from 'react';
import { ShoppingCart, Tag, Star, Menu, Package, Cpu, Shirt, Receipt, Search, Bell, Settings } from 'lucide-react';

const categoriesData = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Smartphones, Laptops, Wearables, Cameras.',
    imageUrl: 'https://placehold.co/400x250/4F46E5/FFFFFF?text=Electronics',
    link: '/products/electronics',
  },
  {
    id: 2,
    name: 'Fashion & Apparel',
    description: 'Apparel, Footwear, Accessories, Jewelry.',
    imageUrl: 'https://placehold.co/400x250/6B7280/FFFFFF?text=Fashion',
    link: '/products/fashion',
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    description: 'Appliances, Cookware, Decor, Furniture.',
    imageUrl: 'https://placehold.co/400x250/10B981/FFFFFF?text=Home',
    link: '/products/home-kitchen',
  },
  {
    id: 4,
    name: 'Health & Beauty',
    description: 'Skincare, Makeup, Haircare, Fragrances.',
    imageUrl: 'https://placehold.co/400x250/F0F0F0/333333?text=Beauty',
    link: '/products/health-beauty',
  },
  {
    id: 5,
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, Camping gear, Apparel.',
    imageUrl: 'https://placehold.co/400x250/A855F7/FFFFFF?text=Sports',
    link: '/products/sports-outdoors',
  },
  {
    id: 6,
    name: 'Books & Media',
    description: 'Fiction, Non-Fiction, Textbooks, E-books.',
    imageUrl: 'https://placehold.co/400x250/F59E0B/FFFFFF?text=Books',
    link: '/products/books-media',
  },
  {
    id: 7,
    name: 'Toys & Games',
    description: 'Educational toys, Board games, Action figures.',
    imageUrl: 'https://placehold.co/400x250/EF4444/FFFFFF?text=Toys',
    link: '/products/toys-games',
  },
  {
    id: 8,
    name: 'Automotive',
    description: 'Car parts, Accessories, Tools & Equipment.',
    imageUrl: 'https://placehold.co/400x250/607D8B/FFFFFF?text=Auto',
    link: '/products/automotive',
  },
];

const CategoriesPageContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sidebar logic omitted for now since main layout handles navigation

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl md:text-2xl font-semibold">Shop by Category</h1>
      </div>
      <div className="flex border-b border-gray-200 mb-4 overflow-x-auto whitespace-nowrap">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium text-sm">
          Popular
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
          New Arrivals
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
          Top Rated
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm">
          Deals
        </button>
      </div>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Explore Our Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoriesData.map((category) => (
            <a href={category.link} key={category.id} className="relative rounded-lg shadow-md overflow-hidden border border-gray-200 block group">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/CCCCCC/555555?text=Category+Image"; }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1 leading-snug">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Trending Products</h2>
        <div className="h-48 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
          Dynamic Trending Products Placeholder
        </div>
      </section>
    </div>
  );
};

export default CategoriesPageContent; 