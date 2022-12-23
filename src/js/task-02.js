const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((el) => {
  const addingEl = document.createElement("li");
  addingEl.textContent = el;
  addingEl.classList.add("item");
  return addingEl;
});

document.querySelector("#ingredients").append(...elements);
