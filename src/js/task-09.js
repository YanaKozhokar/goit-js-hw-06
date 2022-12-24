function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const textRef = document.querySelector(".color");

const buttonHandle = document.querySelector(".change-color");
buttonHandle.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyRef.style = `background-color: ${color}`;
  textRef.textContent = color;
});
