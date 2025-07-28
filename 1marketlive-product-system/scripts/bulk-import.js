#!/usr/bin/env node

/**
 * 1MarketLive® Bulk Import Script
 * Command-line tool for importing thousands of products
 */

import fs from 'fs';
import path from 'path';

// Sample data for demonstration
const sampleProducts = [
  {
    name: "Medicube One Day Exosome Shot 2000 Serum",
    url: "https://www.amazon.com/Medicube-One-Day-Exosome-2000/dp/B0D137TMRB",
    price: 89.99,
    description: "Revolutionary K-beauty serum with 2000ppm exosomes for intensive skin regeneration and anti-aging.",
    brand: "Medicube",
    category: "K-Beauty",
    rating: 4.8,
    reviews: 2847
  },
  {
    name: "BRUUN SD Salmon DNA PDRN Ampoule",
    url: "https://www.amazon.com/BR%C3%9CUN-SD-Control-Needling-Microneedling/dp/B08ZYXPGZJ",
    price: 79.99,
    description: "Advanced salmon DNA PDRN ampoule for skin repair, regeneration, and anti-inflammatory benefits.",
    brand: "BRUUN SD",
    category: "K-Beauty",
    rating: 4.7,
    reviews: 1923
  },
  {
    name: "TOSOWOONG Pink Peptide 12 PDRN Serum",
    url: "https://www.amazon.com/TOSOWOONG-Peptides-Niacinamide-Hydrating-Moisturizing/dp/B0DRJX22GS",
    price: 69.99,
    description: "12-peptide complex with PDRN and niacinamide for comprehensive anti-aging and skin barrier repair.",
    brand: "TOSOWOONG",
    category: "K-Beauty",
    rating: 4.6,
    reviews: 1456
  }
];

function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') + '-' + Date.now();
}

function ensureAffiliateTag(url) {
  if (!url) return url;
  if (url.includes('amazon.') && !url.includes('tag=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tag=1mlaffiliates-20`;
  }
  return url;
}

function standardizeProduct(productData) {
  return {
    id: generateId(productData.name),
    name: productData.name,
    url: ensureAffiliateTag(productData.url),
    price: parseFloat(productData.price) || 0,
    description: productData.description || `${productData.name} - Premium quality product`,
    brand: productData.brand || 'Premium Brand',
    category: productData.category || 'General',
    rating: parseFloat(productData.rating) || 4.5,
    reviews: parseInt(productData.reviews) || 100,
    availability: 'In Stock',
    shipping: 'Free Shipping',
    trending: productData.trending || false,
    featured: productData.featured || false,
    addedAt: new Date().toISOString(),
    image: `https://placehold.co/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(productData.name)}`
  };
}

function importFromCSV(csvFilePath) {
  console.log(`📊 Importing from CSV: ${csvFilePath}`);
  
  if (!fs.existsSync(csvFilePath)) {
    console.error(`❌ File not found: ${csvFilePath}`);
    return;
  }

  const csvContent = fs.readFileSync(csvFilePath, 'utf8');
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const products = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
    
    if (values.length >= 2) {
      const productData = {
        name: values[0],
        url: values[1],
        price: values[2],
        description: values[3],
        brand: values[4],
        category: values[5],
        rating: values[6],
        reviews: values[7]
      };
      
      products.push(standardizeProduct(productData));
    }
  }

  console.log(`✅ Processed ${products.length} products from CSV`);
  return products;
}

function importFromJSON(jsonFilePath) {
  console.log(`📊 Importing from JSON: ${jsonFilePath}`);
  
  if (!fs.existsSync(jsonFilePath)) {
    console.error(`❌ File not found: ${jsonFilePath}`);
    return;
  }

  const jsonContent = fs.readFileSync(jsonFilePath, 'utf8');
  const data = JSON.parse(jsonContent);
  const productsArray = Array.isArray(data) ? data : data.products || [];
  
  const products = productsArray.map(standardizeProduct);
  
  console.log(`✅ Processed ${products.length} products from JSON`);
  return products;
}

function saveProducts(products, outputPath = 'imported-products.json') {
  const output = {
    importedAt: new Date().toISOString(),
    totalProducts: products.length,
    products: products
  };
  
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`💾 Saved ${products.length} products to ${outputPath}`);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🚀 1MarketLive® Bulk Import Tool

Usage:
  node bulk-import.js <command> [options]

Commands:
  csv <file>     Import from CSV file
  json <file>    Import from JSON file
  sample         Generate sample products
  help           Show this help

Examples:
  node bulk-import.js csv products.csv
  node bulk-import.js json products.json
  node bulk-import.js sample
    `);
    return;
  }

  const command = args[0];
  
  switch (command) {
    case 'csv':
      if (args[1]) {
        const products = importFromCSV(args[1]);
        if (products) {
          saveProducts(products, 'imported-from-csv.json');
        }
      } else {
        console.error('❌ Please provide CSV file path');
      }
      break;
      
    case 'json':
      if (args[1]) {
        const products = importFromJSON(args[1]);
        if (products) {
          saveProducts(products, 'imported-from-json.json');
        }
      } else {
        console.error('❌ Please provide JSON file path');
      }
      break;
      
    case 'sample':
      const sampleProcessed = sampleProducts.map(standardizeProduct);
      saveProducts(sampleProcessed, 'sample-products.json');
      console.log('✅ Generated sample products file');
      break;
      
    case 'help':
    default:
      console.log('Use "node bulk-import.js" without arguments to see usage instructions');
      break;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { importFromCSV, importFromJSON, standardizeProduct, saveProducts };
