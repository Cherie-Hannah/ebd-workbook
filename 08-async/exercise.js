// 08-async — your work goes in this file.
// Check your work with: npm test 08

import { findProduct, findAllProducts } from "./fake-db.js";

// await productName(1) -> "Notebook"
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

// await priceLabel(1) -> "Notebook costs 45 EGP"
export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

// await safeProductName(99) -> "Not found"
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

// await namesInStock() -> ["Notebook", "Pen", "Desk lamp"]
export async function namesInStock() {
  const products = await findAllProducts();
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}