/**
 * 1MarketLive® Product Data Bridge
 * Connects the product management system with the main site
 */

class ProductDataBridge {
  constructor() {
    this.storageKey = '1marketlive-products';
    this.lastSyncKey = '1marketlive-last-sync';
  }

  /**
   * Get products from the product management system
   */
  getProductsFromManager() {
    try {
      const products = localStorage.getItem(this.storageKey);
      return products ? JSON.parse(products) : [];
    } catch (error) {
      console.error('Error loading products from manager:', error);
      return [];
    }
  }

  /**
   * Convert product manager format to main site format
   */
  convertToMainSiteFormat(products) {
    return products.map(product => ({
      name: product.name,
      url: product.url,
      image: product.image || `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(product.name)}`,
      description: product.description,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      category: product.category,
      brand: product.brand,
      availability: product.availability || 'In Stock',
      shipping: product.shipping || 'Free Shipping',
      trending: product.trending || false,
      featured: product.featured || false,
      // Add research data if available
      researchData: product.researchData || {
        problemSolved: "Premium quality product",
        trendingOn: ["Amazon"],
        markupPotential: "5x",
        arbitrageOpportunity: "Strong online presence",
        keyBenefits: ["High quality", "Great value", "Customer favorite"]
      }
    }));
  }

  /**
   * Sync products to main site format
   */
  syncToMainSite() {
    const products = this.getProductsFromManager();
    const convertedProducts = this.convertToMainSiteFormat(products);
    
    // Update last sync time
    localStorage.setItem(this.lastSyncKey, new Date().toISOString());
    
    console.log(`🔄 Synced ${convertedProducts.length} products to main site format`);
    return convertedProducts;
  }

  /**
   * Get products by category for main site
   */
  getProductsByCategory(categoryName) {
    const products = this.syncToMainSite();
    return products.filter(product => 
      product.category.toLowerCase() === categoryName.toLowerCase()
    );
  }

  /**
   * Get featured products for homepage
   */
  getFeaturedProducts(limit = 8) {
    const products = this.syncToMainSite();
    return products
      .filter(product => product.featured || product.trending)
      .slice(0, limit);
  }

  /**
   * Search products
   */
  searchProducts(query, category = null) {
    const products = this.syncToMainSite();
    
    return products.filter(product => {
      const matchesQuery = !query || 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = !category || 
        category === 'All' || 
        product.category === category;
      
      return matchesQuery && matchesCategory;
    });
  }

  /**
   * Get product statistics
   */
  getStats() {
    const products = this.getProductsFromManager();
    const categories = [...new Set(products.map(p => p.category))];
    
    return {
      totalProducts: products.length,
      totalCategories: categories.length,
      lastSync: localStorage.getItem(this.lastSyncKey),
      categories: categories
    };
  }

  /**
   * Export products for backup or migration
   */
  exportProducts() {
    const products = this.getProductsFromManager();
    const exportData = {
      exportedAt: new Date().toISOString(),
      totalProducts: products.length,
      products: products
    };
    
    // Create downloadable file
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `1marketlive-products-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    return exportData;
  }

  /**
   * Import products from backup
   */
  importProducts(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      const products = data.products || data;
      
      localStorage.setItem(this.storageKey, JSON.stringify(products));
      localStorage.setItem(this.lastSyncKey, new Date().toISOString());
      
      console.log(`📥 Imported ${products.length} products`);
      return { success: true, count: products.length };
    } catch (error) {
      console.error('Import failed:', error);
      return { success: false, error: error.message };
    }
  }
}

// Create global instance
const productDataBridge = new ProductDataBridge();

export default productDataBridge;
