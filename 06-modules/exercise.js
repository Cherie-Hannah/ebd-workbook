// 06-modules — your work goes in this file, and in one you create yourself.
// Check your work with: npm test 06

import shopName, { products, formatEGP } from "./catalog.js";

// productCount() -> 4
export function productCount() {
  return products.length;
}

// priceTag({ name: "Notebook", price: 45 }) -> "45 EGP"
export function priceTag(product) {
  return formatEGP(product.price);
}

// shopHeading() -> "GIU Campus Store catalog"
export function shopHeading() {
  return `${shopName} catalog`;
}