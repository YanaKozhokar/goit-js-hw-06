const formInputHandler = document.querySelector(".login-form");
const inputFormRef = document.querySelectorAll("form input");
const submitBtnRef = document.querySelector("button[type='submit']");

formInputHandler.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    inputFormRef.forEach((el) => {
      if (el.value === "") {
        throw "All fildes must be filled!";
      } else {
      }
    });
  } catch (exception) {
    alert(exception);
  }
});
