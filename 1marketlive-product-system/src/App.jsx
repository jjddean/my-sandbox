import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Upload, Database, BarChart3, Settings } from 'lucide-react';

// Components
import ProductImporter from './components/ProductImporter';
import ProductCatalog from './components/ProductCatalog';
import Dashboard from './components/Dashboard';
import CategoryManager from './components/CategoryManager';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['Beauty', 'Electronics', 'Fashion', 'Health', 'Home']);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalRevenue: 0,
    conversionRate: 0
  });

  // Load products from localStorage on startup
  useEffect(() => {
    const savedProducts = localStorage.getItem('1marketlive-products');
    if (savedProducts) {
      const parsedProducts = JSON.parse(savedProducts);
      setProducts(parsedProducts);
      updateStats(parsedProducts);
    }
  }, []);

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('1marketlive-products', JSON.stringify(products));
      updateStats(products);
    }
  }, [products]);

  const updateStats = (productList) => {
    const totalProducts = productList.length;
    const totalCategories = new Set(productList.map(p => p.category)).size;
    const totalRevenue = productList.reduce((sum, p) => sum + (p.price * (p.sales || 0)), 0);
    const conversionRate = totalProducts > 0 ? (productList.filter(p => p.sales > 0).length / totalProducts * 100) : 0;

    setStats({
      totalProducts,
      totalCategories,
      totalRevenue,
      conversionRate: conversionRate.toFixed(1)
    });
  };

  const addProducts = (newProducts) => {
    const updatedProducts = [...products, ...newProducts];
    setProducts(updatedProducts);
    return { success: true, count: newProducts.length };
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
  };

  const updateProduct = (productId, updates) => {
    const updatedProducts = products.map(p => 
      p.id === productId ? { ...p, ...updates } : p
    );
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">1MarketLive®</span>
                <span className="ml-2 text-sm text-gray-500">Product Management</span>
              </div>
              
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <Link to="/catalog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Database className="h-4 w-4 mr-1" />
                  Catalog
                </Link>
                <Link to="/import" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Upload className="h-4 w-4 mr-1" />
                  Import
                </Link>
                <Link to="/categories" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Settings className="h-4 w-4 mr-1" />
                  Categories
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={
              <Dashboard 
                stats={stats} 
                products={products} 
                categories={categories}
              />
            } />
            <Route path="/catalog" element={
              <ProductCatalog 
                products={products}
                onDelete={deleteProduct}
                onUpdate={updateProduct}
                categories={categories}
              />
            } />
            <Route path="/import" element={
              <ProductImporter 
                onImport={addProducts}
                categories={categories}
              />
            } />
            <Route path="/categories" element={
              <CategoryManager 
                categories={categories}
                setCategories={setCategories}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
