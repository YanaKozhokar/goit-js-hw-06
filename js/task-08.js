const formInputHandler = document.querySelector(".login-form");
const inputFormRef = document.querySelectorAll("form input");
let inputObject = {};

formInputHandler.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    inputFormRef.forEach((el) => {
      if (el.value === "") {
        throw "All fildes must be filled!";
      } else {
        inputObject[el.name] = el.value;
      }
    });
  } catch (exception) {
    alert(exception);
  }
  console.log(inputObject);
});
