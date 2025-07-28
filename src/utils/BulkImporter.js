/**
 * 1MarketLive® Bulk Product Importer
 * Import products from CSV, JSON, or direct data
 */

import productManager from './ProductManager.js';

class BulkImporter {
  constructor() {
    this.supportedFormats = ['csv', 'json', 'xlsx'];
  }

  /**
   * Import from CSV string or file
   */
  async importFromCSV(csvData, categoryName = 'imported') {
    try {
      const lines = csvData.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
      
      const products = [];
      
      for (let i = 1; i < lines.length; i++) {
        const values = this.parseCSVLine(lines[i]);
        const product = this.mapCSVToProduct(headers, values, categoryName);
        
        if (product) {
          products.push(product);
        }
      }

      const result = productManager.bulkImportProducts(products, categoryName);
      console.log(`📊 CSV Import: ${result.imported.length} products imported`);
      
      return result;
    } catch (error) {
      console.error('❌ CSV Import failed:', error);
      throw error;
    }
  }

  /**
   * Import from JSON array
   */
  async importFromJSON(jsonData, categoryName = 'imported') {
    try {
      const products = Array.isArray(jsonData) ? jsonData : jsonData.products || [];
      const result = productManager.bulkImportProducts(products, categoryName);
      
      console.log(`📊 JSON Import: ${result.imported.length} products imported`);
      return result;
    } catch (error) {
      console.error('❌ JSON Import failed:', error);
      throw error;
    }
  }

  /**
   * Import from Amazon product URLs (for affiliate links)
   */
  async importFromAmazonURLs(urls, categoryName = 'amazon-imports') {
    const products = [];
    
    for (const url of urls) {
      try {
        const product = await this.extractAmazonProductData(url);
        if (product) {
          products.push(product);
        }
      } catch (error) {
        console.warn(`⚠️ Failed to extract data from URL: ${url}`, error);
      }
    }

    const result = productManager.bulkImportProducts(products, categoryName);
    console.log(`📊 Amazon URL Import: ${result.imported.length} products imported`);
    
    return result;
  }

  /**
   * Quick add single product (simplified interface)
   */
  quickAdd(productData) {
    const standardizedProduct = this.standardizeProduct(productData);
    return productManager.addProduct(standardizedProduct);
  }

  /**
   * Batch add multiple products with validation
   */
  batchAdd(productsArray, categoryName) {
    const validatedProducts = productsArray.map(product => 
      this.standardizeProduct(product, categoryName)
    );
    
    return productManager.bulkImportProducts(validatedProducts, categoryName);
  }

  /**
   * Parse CSV line handling quoted values
   */
  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    result.push(current.trim());
    return result;
  }

  /**
   * Map CSV data to product object
   */
  mapCSVToProduct(headers, values, categoryName) {
    const product = { category: categoryName };
    
    // Standard field mappings
    const fieldMappings = {
      'name': ['name', 'title', 'product_name', 'product_title'],
      'url': ['url', 'link', 'amazon_url', 'product_url'],
      'price': ['price', 'cost', 'amount'],
      'description': ['description', 'desc', 'summary'],
      'image': ['image', 'img', 'photo', 'image_url'],
      'brand': ['brand', 'manufacturer', 'company'],
      'rating': ['rating', 'stars', 'score'],
      'reviews': ['reviews', 'review_count', 'ratings_count']
    };

    headers.forEach((header, index) => {
      const value = values[index]?.replace(/"/g, '');
      const normalizedHeader = header.toLowerCase();
      
      // Find matching field
      for (const [field, variations] of Object.entries(fieldMappings)) {
        if (variations.includes(normalizedHeader)) {
          product[field] = this.convertValue(field, value);
          break;
        }
      }
      
      // Direct mapping if no variation found
      if (!product[normalizedHeader] && value) {
        product[normalizedHeader] = value;
      }
    });

    // Validate required fields
    if (!product.name || !product.url) {
      console.warn('⚠️ Skipping product - missing required fields:', product);
      return null;
    }

    return this.standardizeProduct(product, categoryName);
  }

  /**
   * Convert string values to appropriate types
   */
  convertValue(field, value) {
    if (!value) return value;
    
    switch (field) {
      case 'price':
        return parseFloat(value.replace(/[$,]/g, '')) || 0;
      case 'rating':
        return parseFloat(value) || 0;
      case 'reviews':
        return parseInt(value.replace(/[,]/g, '')) || 0;
      default:
        return value;
    }
  }

  /**
   * Standardize product data format
   */
  standardizeProduct(productData, categoryName = null) {
    return {
      id: productData.id || productManager.generateProductId(productData.name),
      name: productData.name,
      url: this.ensureAffiliateTag(productData.url),
      image: productData.image || this.generatePlaceholderImage(productData.name),
      description: productData.description || `${productData.name} - Premium quality product`,
      price: parseFloat(productData.price) || 0,
      rating: parseFloat(productData.rating) || 4.5,
      reviews: parseInt(productData.reviews) || 100,
      category: categoryName || productData.category || 'General',
      subcategory: productData.subcategory || 'Products',
      brand: productData.brand || 'Premium Brand',
      availability: productData.availability || 'In Stock',
      shipping: productData.shipping || 'Free Shipping',
      trending: productData.trending || false,
      featured: productData.featured || false,
      tags: productData.tags || [productData.category?.toLowerCase()],
      addedAt: new Date().toISOString(),
      ...productData // Preserve any additional fields
    };
  }

  /**
   * Ensure affiliate tag is present in URL
   */
  ensureAffiliateTag(url, tag = '1mlaffiliates-20') {
    if (!url) return url;
    
    if (url.includes('amazon.') && !url.includes('tag=')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}tag=${tag}`;
    }
    
    return url;
  }

  /**
   * Generate placeholder image URL
   */
  generatePlaceholderImage(productName) {
    const encodedName = encodeURIComponent(productName);
    return `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodedName}`;
  }

  /**
   * Extract basic product data from Amazon URL (simplified)
   */
  async extractAmazonProductData(url) {
    // This would typically use a web scraping service or API
    // For now, return a basic structure
    const productId = url.match(/\/dp\/([A-Z0-9]+)/)?.[1];
    
    if (!productId) return null;
    
    return {
      name: `Amazon Product ${productId}`,
      url: this.ensureAffiliateTag(url),
      image: `https://images-na.ssl-images-amazon.com/images/I/${productId}._AC_SL1500_.jpg`,
      description: `Premium product available on Amazon`,
      price: 29.99,
      rating: 4.5,
      reviews: 500,
      brand: 'Amazon Brand'
    };
  }
}

// Create global instance
const bulkImporter = new BulkImporter();

export default bulkImporter;
