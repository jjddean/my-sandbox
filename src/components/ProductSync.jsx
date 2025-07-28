import React, { useState, useEffect } from 'react';
import { RefreshCw, Download, Upload, Database, CheckCircle, AlertCircle } from 'lucide-react';
import productDataBridge from '../utils/ProductDataBridge.js';

const ProductSync = () => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadStats();
    loadProducts();
  }, []);

  const loadStats = () => {
    const currentStats = productDataBridge.getStats();
    setStats(currentStats);
  };

  const loadProducts = () => {
    const syncedProducts = productDataBridge.syncToMainSite();
    setProducts(syncedProducts);
  };

  const handleSync = () => {
    setIsLoading(true);
    try {
      const syncedProducts = productDataBridge.syncToMainSite();
      setProducts(syncedProducts);
      loadStats();
      setMessage({
        type: 'success',
        text: `Successfully synced ${syncedProducts.length} products!`
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: `Sync failed: ${error.message}`
      });
    }
    setIsLoading(false);
  };

  const handleExport = () => {
    try {
      productDataBridge.exportProducts();
      setMessage({
        type: 'success',
        text: 'Products exported successfully!'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: `Export failed: ${error.message}`
      });
    }
  };

  const handleFileImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = productDataBridge.importProducts(e.target.result);
        if (result.success) {
          loadStats();
          loadProducts();
          setMessage({
            type: 'success',
            text: `Successfully imported ${result.count} products!`
          });
        } else {
          setMessage({
            type: 'error',
            text: `Import failed: ${result.error}`
          });
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: `Import failed: ${error.message}`
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Data Sync</h2>
        <p className="text-gray-600">Sync products from your Product Management System to the main site</p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-blue-600">Total Products</p>
                <p className="text-2xl font-bold text-blue-900">{stats.totalProducts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-green-600">Categories</p>
                <p className="text-2xl font-bold text-green-900">{stats.totalCategories}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center">
              <RefreshCw className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-purple-600">Last Sync</p>
                <p className="text-sm font-bold text-purple-900">
                  {stats.lastSync ? new Date(stats.lastSync).toLocaleString() : 'Never'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleSync}
          disabled={isLoading}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Syncing...' : 'Sync Products'}</span>
        </button>
        
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          <Download className="h-4 w-4" />
          <span>Export Products</span>
        </button>
        
        <label className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer">
          <Upload className="h-4 w-4" />
          <span>Import Products</span>
          <input
            type="file"
            accept=".json"
            onChange={handleFileImport}
            className="hidden"
          />
        </label>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-md mb-6 flex items-center space-x-3 ${
          message.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className={`font-medium ${
            message.type === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {message.text}
          </p>
        </div>
      )}

      {/* Product Preview */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Synced Products ({products.length})
        </h3>
        
        {products.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No products synced yet</p>
            <p className="text-sm text-gray-400 mt-1">Click "Sync Products" to load from Product Manager</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {products.slice(0, 12).map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{product.category}</span>
                  <span className="font-medium text-gray-900">${product.price}</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
              </div>
            ))}
            {products.length > 12 && (
              <div className="col-span-full text-center text-sm text-gray-500 mt-2">
                ... and {products.length - 12} more products
              </div>
            )}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">How to Use:</h4>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Add products in your Product Manager (localhost:5177)</li>
          <li>2. Click "Sync Products" to load them here</li>
          <li>3. Products are now available for your main site</li>
          <li>4. Use "Export Products" to backup your data</li>
        </ol>
      </div>
    </div>
  );
};

export default ProductSync;
