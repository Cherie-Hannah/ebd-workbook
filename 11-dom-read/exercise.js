// 11-dom-read — your work goes in this file.
// Check your work with: npm test 11

// pageHeading() -> "My Campus Store"
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

// productCount() -> 5
export function productCount() {
  return document.querySelectorAll(".card").length;
}

// productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
export function productNames() {
  const headings = document.querySelectorAll(".card h3");
  return Array.from(headings).map((h3) => h3.textContent);
}

// priceOf("Pen") -> "15 EGP", priceOf("Nothing") -> null
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (!card) {
    return null;
  }
  return card.querySelector(".price").textContent;
}

// soldOutNames() -> ["Backpack", "Calculator"]
export function soldOutNames() {
  const headings = document.querySelectorAll(".card.sold-out h3");
  return Array.from(headings).map((h3) => h3.textContent);
}