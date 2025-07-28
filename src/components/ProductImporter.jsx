import React, { useState } from 'react';
import { Upload, FileText, Database, Plus, Download } from 'lucide-react';
import bulkImporter from '../utils/BulkImporter.js';
import productManager from '../utils/ProductManager.js';

const ProductImporter = () => {
  const [activeTab, setActiveTab] = useState('quick');
  const [importResults, setImportResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Quick Add Form
  const [quickProduct, setQuickProduct] = useState({
    name: '',
    url: '',
    price: '',
    category: 'Beauty',
    description: ''
  });

  // CSV Import
  const [csvData, setCsvData] = useState('');
  const [categoryName, setCategoryName] = useState('imported');

  // Bulk URLs
  const [urlList, setUrlList] = useState('');

  const handleQuickAdd = async () => {
    setIsLoading(true);
    try {
      const result = bulkImporter.quickAdd(quickProduct);
      setImportResults({
        type: 'quick',
        success: true,
        message: `Product "${result.name}" added successfully!`,
        data: result
      });
      
      // Reset form
      setQuickProduct({
        name: '',
        url: '',
        price: '',
        category: 'Beauty',
        description: ''
      });
    } catch (error) {
      setImportResults({
        type: 'quick',
        success: false,
        message: `Error: ${error.message}`
      });
    }
    setIsLoading(false);
  };

  const handleCSVImport = async () => {
    setIsLoading(true);
    try {
      const result = await bulkImporter.importFromCSV(csvData, categoryName);
      setImportResults({
        type: 'csv',
        success: true,
        message: `Successfully imported ${result.imported.length} products!`,
        data: result
      });
      setCsvData('');
    } catch (error) {
      setImportResults({
        type: 'csv',
        success: false,
        message: `Error: ${error.message}`
      });
    }
    setIsLoading(false);
  };

  const handleURLImport = async () => {
    setIsLoading(true);
    try {
      const urls = urlList.split('\n').filter(url => url.trim());
      const result = await bulkImporter.importFromAmazonURLs(urls, categoryName);
      setImportResults({
        type: 'urls',
        success: true,
        message: `Successfully imported ${result.imported.length} products from URLs!`,
        data: result
      });
      setUrlList('');
    } catch (error) {
      setImportResults({
        type: 'urls',
        success: false,
        message: `Error: ${error.message}`
      });
    }
    setIsLoading(false);
  };

  const downloadTemplate = () => {
    const csvTemplate = `name,url,price,description,brand,category,rating,reviews
"Sample Product","https://amazon.com/product?tag=1mlaffiliates-20",29.99,"Sample description","Sample Brand","Beauty",4.5,100
"Another Product","https://amazon.com/product2?tag=1mlaffiliates-20",49.99,"Another description","Another Brand","Electronics",4.8,250`;
    
    const blob = new Blob([csvTemplate], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '1marketlive-product-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          1MarketLive® Product Importer
        </h1>
        <p className="text-gray-600">
          Scalable product management for your affiliate empire
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'quick', label: 'Quick Add', icon: Plus },
          { id: 'csv', label: 'CSV Import', icon: FileText },
          { id: 'urls', label: 'URL Batch', icon: Database },
          { id: 'template', label: 'Template', icon: Download }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white'
            }`}
          >
            <tab.icon size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Quick Add Tab */}
      {activeTab === 'quick' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Quick Add Single Product</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                value={quickProduct.name}
                onChange={(e) => setQuickProduct({...quickProduct, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amazon URL *
              </label>
              <input
                type="url"
                value={quickProduct.url}
                onChange={(e) => setQuickProduct({...quickProduct, url: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="https://amazon.com/product..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                value={quickProduct.price}
                onChange={(e) => setQuickProduct({...quickProduct, price: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="29.99"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={quickProduct.category}
                onChange={(e) => setQuickProduct({...quickProduct, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="Beauty">Beauty</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Health">Health</option>
                <option value="Home">Home</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={quickProduct.description}
              onChange={(e) => setQuickProduct({...quickProduct, description: e.target.value})}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Product description..."
            />
          </div>
          
          <button
            onClick={handleQuickAdd}
            disabled={isLoading || !quickProduct.name || !quickProduct.url}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      )}

      {/* CSV Import Tab */}
      {activeTab === 'csv' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">CSV Bulk Import</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="beauty, electronics, etc."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSV Data
            </label>
            <textarea
              value={csvData}
              onChange={(e) => setCsvData(e.target.value)}
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="name,url,price,description,brand,category,rating,reviews
Product 1,https://amazon.com/...,29.99,Description,Brand,Beauty,4.5,100"
            />
          </div>
          
          <button
            onClick={handleCSVImport}
            disabled={isLoading || !csvData.trim()}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            {isLoading ? 'Importing...' : 'Import CSV'}
          </button>
        </div>
      )}

      {/* Results Display */}
      {importResults && (
        <div className={`mt-8 p-4 rounded-md ${
          importResults.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <p className={`font-medium ${
            importResults.success ? 'text-green-800' : 'text-red-800'
          }`}>
            {importResults.message}
          </p>
          
          {importResults.data && importResults.data.errors?.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-red-600">
                {importResults.data.errors.length} products had errors:
              </p>
              <ul className="text-xs text-red-500 mt-1">
                {importResults.data.errors.slice(0, 5).map((error, index) => (
                  <li key={index}>Row {error.index + 2}: {error.error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductImporter;
