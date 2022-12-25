const categoriesItemRef = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItemRef.length}`);

categoriesItemRef.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
