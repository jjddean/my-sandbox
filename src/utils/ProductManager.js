/**
 * 1MarketLive® Product Management System
 * Scalable solution for managing thousands of affiliate products
 */

class ProductManager {
  constructor() {
    this.products = new Map();
    this.categories = new Map();
    this.loadedCategories = new Set();
  }

  /**
   * Load products from JSON file for a specific category
   */
  async loadCategory(categoryName) {
    if (this.loadedCategories.has(categoryName)) {
      return this.getProductsByCategory(categoryName);
    }

    try {
      const response = await fetch(`/src/data/products/${categoryName}.json`);
      const data = await response.json();
      
      // Store products in memory
      data.products.forEach(product => {
        this.products.set(product.id, {
          ...product,
          loadedAt: new Date().toISOString()
        });
      });

      this.categories.set(categoryName, {
        ...data,
        loadedAt: new Date().toISOString()
      });

      this.loadedCategories.add(categoryName);
      
      console.log(`✅ Loaded ${data.products.length} products for category: ${categoryName}`);
      return data.products;
    } catch (error) {
      console.error(`❌ Failed to load category ${categoryName}:`, error);
      return [];
    }
  }

  /**
   * Get all products for a category
   */
  getProductsByCategory(categoryName) {
    return Array.from(this.products.values())
      .filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
  }

  /**
   * Search products across all loaded categories
   */
  searchProducts(query, filters = {}) {
    const allProducts = Array.from(this.products.values());
    
    return allProducts.filter(product => {
      // Text search
      const matchesQuery = !query || 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      // Category filter
      const matchesCategory = !filters.category || 
        filters.category === 'All' || 
        product.category === filters.category;

      // Price range filter
      const matchesPrice = (!filters.minPrice || product.price >= filters.minPrice) &&
        (!filters.maxPrice || product.price <= filters.maxPrice);

      // Rating filter
      const matchesRating = !filters.minRating || product.rating >= filters.minRating;

      // Trending filter
      const matchesTrending = !filters.trending || product.trending === filters.trending;

      return matchesQuery && matchesCategory && matchesPrice && matchesRating && matchesTrending;
    });
  }

  /**
   * Get product by ID
   */
  getProduct(productId) {
    return this.products.get(productId);
  }

  /**
   * Add single product (for manual additions)
   */
  addProduct(productData) {
    const product = {
      id: productData.id || this.generateProductId(productData.name),
      ...productData,
      addedAt: new Date().toISOString()
    };

    this.products.set(product.id, product);
    console.log(`✅ Added product: ${product.name}`);
    return product;
  }

  /**
   * Bulk import products from array
   */
  bulkImportProducts(productsArray, categoryName) {
    const imported = [];
    const errors = [];

    productsArray.forEach((productData, index) => {
      try {
        const product = this.addProduct({
          ...productData,
          category: categoryName
        });
        imported.push(product);
      } catch (error) {
        errors.push({
          index,
          data: productData,
          error: error.message
        });
      }
    });

    console.log(`✅ Bulk import complete: ${imported.length} products added, ${errors.length} errors`);
    return { imported, errors };
  }

  /**
   * Generate unique product ID from name
   */
  generateProductId(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50) + '-' + Date.now();
  }

  /**
   * Export products to JSON format
   */
  exportCategory(categoryName) {
    const products = this.getProductsByCategory(categoryName);
    return {
      category: categoryName,
      lastUpdated: new Date().toISOString(),
      totalProducts: products.length,
      products: products
    };
  }

  /**
   * Get statistics
   */
  getStats() {
    const totalProducts = this.products.size;
    const categoriesLoaded = this.loadedCategories.size;
    const trendingProducts = Array.from(this.products.values()).filter(p => p.trending).length;
    
    return {
      totalProducts,
      categoriesLoaded,
      trendingProducts,
      loadedCategories: Array.from(this.loadedCategories)
    };
  }
}

// Create global instance
const productManager = new ProductManager();

export default productManager;
