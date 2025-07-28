/**
 * 1MarketLive® Bulk Import Demo
 * Shows how easy it is to add hundreds/thousands of products
 */

// Example: Import from your existing product list
const yourProducts = [
  {
    name: "Medicube One Day Exosome Shot 2000 Serum",
    url: "https://www.amazon.com/Medicube-One-Day-Exosome-2000/dp/B0D137TMRB",
    price: 89.99,
    category: "K-Beauty"
  },
  {
    name: "BRUUN SD Salmon DNA PDRN Ampoule", 
    url: "https://www.amazon.com/BR%C3%9CUN-SD-Control-Needling-Microneedling/dp/B08ZYXPGZJ",
    price: 79.99,
    category: "K-Beauty"
  }
  // ... add your 1000s of products here
];

// Method 1: Quick Bulk Import (JavaScript)
import bulkImporter from '../src/utils/BulkImporter.js';

async function importYourProducts() {
  console.log('🚀 Starting bulk import...');
  
  const result = await bulkImporter.batchAdd(yourProducts, 'beauty');
  
  console.log(`✅ Import complete!`);
  console.log(`📊 Successfully imported: ${result.imported.length} products`);
  console.log(`❌ Errors: ${result.errors.length} products`);
  
  return result;
}

// Method 2: CSV Import (for spreadsheet users)
const csvExample = `
name,url,price,description,brand,category
"Product 1","https://amazon.com/dp/B123?tag=1mlaffiliates-20",29.99,"Description 1","Brand 1","Beauty"
"Product 2","https://amazon.com/dp/B456?tag=1mlaffiliates-20",49.99,"Description 2","Brand 2","Electronics"
`;

async function importFromCSV() {
  const result = await bulkImporter.importFromCSV(csvExample, 'mixed');
  console.log('CSV Import Result:', result);
}

// Method 3: URL List Import (paste Amazon URLs)
const amazonUrls = [
  "https://www.amazon.com/Medicube-One-Day-Exosome-2000/dp/B0D137TMRB",
  "https://www.amazon.com/BR%C3%9CUN-SD-Control-Needling-Microneedling/dp/B08ZYXPGZJ",
  // ... paste your 1000s of URLs here
];

async function importFromURLs() {
  const result = await bulkImporter.importFromAmazonURLs(amazonUrls, 'amazon-batch');
  console.log('URL Import Result:', result);
}

// Method 4: Single Product Quick Add
function quickAddExample() {
  const product = bulkImporter.quickAdd({
    name: "New Product",
    url: "https://amazon.com/product?tag=1mlaffiliates-20",
    price: 39.99,
    category: "Beauty"
  });
  
  console.log('Quick Add Result:', product);
}

// Export functions for use
export {
  importYourProducts,
  importFromCSV,
  importFromURLs,
  quickAddExample
};

// Usage Examples:
console.log(`
🎯 1MarketLive® Product Import Methods:

1. BULK JAVASCRIPT IMPORT:
   - Add array of 1000s of products
   - Automatic affiliate tag addition
   - Data validation & standardization
   
2. CSV SPREADSHEET IMPORT:
   - Export from Excel/Google Sheets
   - Paste CSV data directly
   - Column mapping & validation
   
3. URL BATCH IMPORT:
   - Paste list of Amazon URLs
   - Automatic product data extraction
   - Bulk affiliate tag addition
   
4. QUICK SINGLE ADD:
   - Add one product at a time
   - Perfect for testing
   - Instant validation

🚀 Ready to scale your affiliate empire!
`);
