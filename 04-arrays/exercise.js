// 04-arrays — your work goes in this file.
// Check your work with: npm test 04

// Every product's name, in the same order.
export function productNames(products) {
  return products.map((product) => product.name);
}

// Only the products priced UNDER the limit (whole products, not names).
export function cheaperThan(products, limit) {
  return products.filter((product) => product.price < limit);
}

// The one product with that id, or undefined if there isn't one.
export function findById(products, id) {
  return products.find((product) => product.id === id);
}

// All prices added up. Starts from 0 so an empty list gives 0.
export function totalPrice(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

// Names of only the products that are in stock.
export function inStockNames(products) {
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}