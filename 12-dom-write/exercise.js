// 12-dom-write — your work goes in this file.
// Check your work with: npm test 12

// A small helper: the card whose h3 says `name`, or undefined.
function findCard(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));
  return cards.find((card) => card.querySelector("h3").textContent === name);
}

// addProduct("Pen", 15) adds <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

// Removes the card with that name, if there is one.
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

// Adds the class sold-out to the card with that name.
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

// Removes every card.
export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");
  cards.forEach((card) => card.remove());
}

// #add adds a Notebook at 45, #reset empties the list.
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}