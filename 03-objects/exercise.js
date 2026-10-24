// 03-objects — your work goes in this file.
//
// The lesson is in example.js:  node 03-objects/example.js
// Check your work with:         npm test 03
//
// A product looks like this:
//   { id: 1, name: "Notebook", price: 45, inStock: true }

/**
 * productName({ name: "Notebook", ... }) -> "Notebook"
 */
export function productName(product) {
  return product.name;
}

/**
 * getField(product, "price") -> 45
 * getField(product, "colour") -> undefined
 */
export function getField(product, field) {
  return product[field];
}

/**
 * { name: "Salma", address: { city: "Cairo", street: "El Tahrir" } } -> "Cairo"
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * summarize({ name: "Notebook", price: 45, ... }) -> "Notebook costs 45 EGP"
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * withPrice(product, 30) -> a NEW object with price 30, everything else the same
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}