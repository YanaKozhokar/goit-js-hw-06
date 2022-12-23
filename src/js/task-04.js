let counterValue = 0;
const valueRef = document.querySelector("#value");
const buttonClickDecrementHandler = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonClickIncrementHandler = document.querySelector(
  'button[data-action="increment"]'
);

buttonClickDecrementHandler.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
buttonClickIncrementHandler.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
