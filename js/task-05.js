const inputHandler = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputHandler.addEventListener("input", () => {
  if (inputHandler.value != "") {
    outputRef.textContent = inputHandler.value;
  } else {
    outputRef.textContent = "Anonymous";
  }
});
