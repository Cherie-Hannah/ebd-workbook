// 05-strings-json — your work goes in this file.
// Check your work with: npm test 05

// shout("  notebook  ") -> "NOTEBOOK"
export function shout(text) {
  return text.trim().toUpperCase();
}

// initials("Nour Gaser") -> "NG"
export function initials(fullName) {
  return fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// toJson({ id: 1, name: "Notebook" }) -> '{"id":1,"name":"Notebook"}'
export function toJson(product) {
  return JSON.stringify(product);
}

// displayName({ name: "Salma" }) -> "Salma"
// displayName({ name: "" }) or displayName({}) -> "Unknown student"
export function displayName(student) {
  return student.name || "Unknown student";
}

// summaryFromJson('{ "name": "Notebook", "price": 45 }') -> "Notebook costs 45 EGP"
export function summaryFromJson(jsonText) {
  const product = JSON.parse(jsonText);
  return `${product.name} costs ${product.price} EGP`;
}