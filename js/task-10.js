function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input[type='number']");
const btnCreateClickHandler = document.querySelector("button[data-create]");
const btnDestroyClickHandler = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  const boxesArray = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesArray.push(
      `<div style="background-color: ${getRandomHexColor()};  width: ${width}px; height: ${height}px;"></div>`
    );
    width += 10;
    height += 10;
  }
  return boxesArray;
}

btnCreateClickHandler.addEventListener("click", () => {
  divBoxesRef.insertAdjacentHTML(
    "beforeend",
    createBoxes(inputRef.value)
      .map((el) => el)
      .join("")
  );
});

btnDestroyClickHandler.addEventListener("click", () => {
  document.querySelectorAll("#boxes > div").forEach((el) => {
    el.remove();
  });
});
