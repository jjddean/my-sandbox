import React, { useState } from 'react';
import { Upload, FileText, Link, Plus, Download, CheckCircle, AlertCircle } from 'lucide-react';

const ProductImporter = ({ onImport, categories }) => {
  const [activeTab, setActiveTab] = useState('quick');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);

  // Quick Add State
  const [quickProduct, setQuickProduct] = useState({
    name: '',
    url: '',
    price: '',
    category: categories[0] || 'Beauty',
    description: '',
    brand: ''
  });

  // CSV State
  const [csvData, setCsvData] = useState('');

  // URL Batch State
  const [urlList, setUrlList] = useState('');

  const generateId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') + '-' + Date.now();
  };

  const ensureAffiliateTag = (url) => {
    if (!url) return url;
    if (url.includes('amazon.') && !url.includes('tag=')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}tag=1mlaffiliates-20`;
    }
    return url;
  };

  const handleQuickAdd = () => {
    if (!quickProduct.name || !quickProduct.url) {
      setResults({ type: 'error', message: 'Name and URL are required' });
      return;
    }

    setIsLoading(true);
    
    const product = {
      id: generateId(quickProduct.name),
      name: quickProduct.name,
      url: ensureAffiliateTag(quickProduct.url),
      price: parseFloat(quickProduct.price) || 0,
      category: quickProduct.category,
      description: quickProduct.description || `${quickProduct.name} - Premium quality product`,
      brand: quickProduct.brand || 'Premium Brand',
      rating: 4.5,
      reviews: Math.floor(Math.random() * 1000) + 100,
      availability: 'In Stock',
      shipping: 'Free Shipping',
      trending: false,
      featured: false,
      addedAt: new Date().toISOString(),
      image: `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(quickProduct.name)}`
    };

    const result = onImport([product]);
    
    setResults({
      type: 'success',
      message: `Successfully added "${product.name}"!`,
      count: 1
    });

    // Reset form
    setQuickProduct({
      name: '',
      url: '',
      price: '',
      category: categories[0] || 'Beauty',
      description: '',
      brand: ''
    });

    setIsLoading(false);
  };

  const handleCSVImport = () => {
    if (!csvData.trim()) {
      setResults({ type: 'error', message: 'Please paste CSV data' });
      return;
    }

    setIsLoading(true);

    try {
      const lines = csvData.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
      const products = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        
        if (values.length >= 2) { // At least name and URL
          const product = {
            id: generateId(values[0] || `product-${i}`),
            name: values[0] || `Product ${i}`,
            url: ensureAffiliateTag(values[1] || ''),
            price: parseFloat(values[2]) || 0,
            description: values[3] || `${values[0]} - Premium quality product`,
            brand: values[4] || 'Premium Brand',
            category: values[5] || categories[0] || 'General',
            rating: parseFloat(values[6]) || 4.5,
            reviews: parseInt(values[7]) || Math.floor(Math.random() * 1000) + 100,
            availability: 'In Stock',
            shipping: 'Free Shipping',
            trending: false,
            featured: false,
            addedAt: new Date().toISOString(),
            image: `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(values[0] || 'Product')}`
          };
          
          products.push(product);
        }
      }

      if (products.length > 0) {
        onImport(products);
        setResults({
          type: 'success',
          message: `Successfully imported ${products.length} products!`,
          count: products.length
        });
        setCsvData('');
      } else {
        setResults({ type: 'error', message: 'No valid products found in CSV data' });
      }
    } catch (error) {
      setResults({ type: 'error', message: `Import failed: ${error.message}` });
    }

    setIsLoading(false);
  };

  const handleURLImport = () => {
    if (!urlList.trim()) {
      setResults({ type: 'error', message: 'Please paste URLs' });
      return;
    }

    setIsLoading(true);

    try {
      const urls = urlList.split('\n').filter(url => url.trim());
      const products = urls.map((url, index) => {
        const productName = `Amazon Product ${index + 1}`;
        return {
          id: generateId(productName),
          name: productName,
          url: ensureAffiliateTag(url.trim()),
          price: 29.99 + (Math.random() * 50), // Random price between 29.99-79.99
          description: `Premium product available on Amazon`,
          brand: 'Amazon Brand',
          category: categories[0] || 'General',
          rating: 4.0 + (Math.random() * 1), // Random rating 4.0-5.0
          reviews: Math.floor(Math.random() * 1000) + 100,
          availability: 'In Stock',
          shipping: 'Free Shipping',
          trending: false,
          featured: false,
          addedAt: new Date().toISOString(),
          image: `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(productName)}`
        };
      });

      onImport(products);
      setResults({
        type: 'success',
        message: `Successfully imported ${products.length} products from URLs!`,
        count: products.length
      });
      setUrlList('');
    } catch (error) {
      setResults({ type: 'error', message: `Import failed: ${error.message}` });
    }

    setIsLoading(false);
  };

  const downloadTemplate = () => {
    const template = `name,url,price,description,brand,category,rating,reviews
"Sample Product 1","https://amazon.com/dp/B123456789",29.99,"High-quality sample product","Sample Brand","Beauty",4.5,150
"Sample Product 2","https://amazon.com/dp/B987654321",49.99,"Another great product","Another Brand","Electronics",4.8,300`;
    
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '1marketlive-import-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Product Importer</h1>
        <p className="text-gray-600 mt-1">Add products individually or in bulk</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'quick', label: 'Quick Add', icon: Plus },
          { id: 'csv', label: 'CSV Import', icon: FileText },
          { id: 'urls', label: 'URL Batch', icon: Link }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
        <button
          onClick={downloadTemplate}
          className="flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-green-600 hover:text-green-700 ml-auto"
        >
          <Download size={16} />
          <span>Download Template</span>
        </button>
      </div>

      {/* Quick Add Tab */}
      {activeTab === 'quick' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
              <input
                type="text"
                value={quickProduct.name}
                onChange={(e) => setQuickProduct({...quickProduct, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amazon URL *</label>
              <input
                type="url"
                value={quickProduct.url}
                onChange={(e) => setQuickProduct({...quickProduct, url: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://amazon.com/dp/..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="number"
                step="0.01"
                value={quickProduct.price}
                onChange={(e) => setQuickProduct({...quickProduct, price: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="29.99"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={quickProduct.category}
                onChange={(e) => setQuickProduct({...quickProduct, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <input
                type="text"
                value={quickProduct.brand}
                onChange={(e) => setQuickProduct({...quickProduct, brand: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brand name"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={quickProduct.description}
              onChange={(e) => setQuickProduct({...quickProduct, description: e.target.value})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Product description..."
            />
          </div>
          
          <button
            onClick={handleQuickAdd}
            disabled={isLoading || !quickProduct.name || !quickProduct.url}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      )}

      {/* CSV Import Tab */}
      {activeTab === 'csv' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CSV Data (name,url,price,description,brand,category,rating,reviews)
            </label>
            <textarea
              value={csvData}
              onChange={(e) => setCsvData(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="name,url,price,description,brand,category,rating,reviews
Product 1,https://amazon.com/dp/B123,29.99,Description,Brand,Beauty,4.5,100"
            />
          </div>
          
          <button
            onClick={handleCSVImport}
            disabled={isLoading || !csvData.trim()}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            {isLoading ? 'Importing...' : 'Import CSV'}
          </button>
        </div>
      )}

      {/* URL Batch Tab */}
      {activeTab === 'urls' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amazon URLs (one per line)
            </label>
            <textarea
              value={urlList}
              onChange={(e) => setUrlList(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              placeholder="https://amazon.com/dp/B123456789
https://amazon.com/dp/B987654321
https://amazon.com/dp/B456789123"
            />
          </div>
          
          <button
            onClick={handleURLImport}
            disabled={isLoading || !urlList.trim()}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
          >
            {isLoading ? 'Importing...' : 'Import URLs'}
          </button>
        </div>
      )}

      {/* Results */}
      {results && (
        <div className={`mt-6 p-4 rounded-md flex items-start space-x-3 ${
          results.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          {results.type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
          )}
          <div>
            <p className={`font-medium ${
              results.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {results.message}
            </p>
            {results.count && (
              <p className="text-sm text-gray-600 mt-1">
                {results.count} product{results.count !== 1 ? 's' : ''} processed
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImporter;
