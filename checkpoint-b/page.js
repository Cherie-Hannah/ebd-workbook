// Checkpoint B — Hana's behaviour.
import { items } from "./items.js";

// Draws a list of items into #list, replacing what was there.
export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  });
}

// Only the items that are out of stock.
export function matching() {
  return items.filter((item) => item.inStock === false);
}

// Draw everything now; show only out-of-stock items when the button is clicked.
export function start() {
  renderItems(items);

  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });
}

