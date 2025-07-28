import React from 'react';
import { ShoppingCart, DollarSign, TrendingUp, Package } from 'lucide-react';

const Dashboard = ({ stats, products, categories }) => {
  const recentProducts = products.slice(-5).reverse();
  const topCategories = categories.map(category => ({
    name: category,
    count: products.filter(p => p.category === category).length,
    value: products.filter(p => p.category === category).reduce((sum, p) => sum + p.price, 0)
  })).sort((a, b) => b.count - a.count);

  const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to 1MarketLive®</h1>
        <p className="text-blue-100">Your affiliate product management dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={stats.totalProducts.toLocaleString()}
          icon={Package}
          color="bg-blue-500"
          subtitle="Active listings"
        />
        <StatCard
          title="Categories"
          value={stats.totalCategories}
          icon={ShoppingCart}
          color="bg-green-500"
          subtitle="Product categories"
        />
        <StatCard
          title="Total Value"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          color="bg-yellow-500"
          subtitle="Inventory value"
        />
        <StatCard
          title="Avg. Rating"
          value={products.length > 0 ? (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1) : '0.0'}
          icon={TrendingUp}
          color="bg-purple-500"
          subtitle="Product quality"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Products</h2>
            <p className="text-sm text-gray-600">Latest additions to your catalog</p>
          </div>
          <div className="p-6">
            {recentProducts.length === 0 ? (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No products added yet</p>
                <p className="text-sm text-gray-400 mt-1">Start by importing your first products</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentProducts.map(product => (
                  <div key={product.id} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/48x48/4F46E5/FFFFFF?text=${product.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.category} • ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(product.addedAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Category Overview</h2>
            <p className="text-sm text-gray-600">Products by category</p>
          </div>
          <div className="p-6">
            {topCategories.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No categories yet</p>
                <p className="text-sm text-gray-400 mt-1">Categories will appear as you add products</p>
              </div>
            ) : (
              <div className="space-y-4">
                {topCategories.slice(0, 6).map(category => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">
                          {category.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{category.name}</p>
                        <p className="text-xs text-gray-500">
                          ${category.value.toFixed(2)} total value
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{category.count}</p>
                      <p className="text-xs text-gray-500">products</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/import"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="text-center">
              <Package className="h-8 w-8 text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">Import Products</p>
              <p className="text-xs text-gray-500">Add new products to your catalog</p>
            </div>
          </a>
          
          <a
            href="/catalog"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
          >
            <div className="text-center">
              <ShoppingCart className="h-8 w-8 text-gray-400 group-hover:text-green-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">View Catalog</p>
              <p className="text-xs text-gray-500">Browse and manage your products</p>
            </div>
          </a>
          
          <a
            href="/categories"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
          >
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-gray-400 group-hover:text-purple-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">Manage Categories</p>
              <p className="text-xs text-gray-500">Organize your product categories</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
