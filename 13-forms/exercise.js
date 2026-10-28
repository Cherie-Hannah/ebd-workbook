// 13-forms — your work goes in this file.
// Check your work with: npm test 13

// The data lives here. The page is just a picture of this array.
const items = [];

// readForm() -> { name: "Pen", price: 15 }
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

// Empties both boxes.
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

// Redraws #list from the array, replacing what was there.
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  });
}

// Handles the form's submit: validate, store, redraw, clear.
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}