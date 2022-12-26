const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const addAlert = () => {
    if (inputEl[0].value === "" || inputEl[1].value === "") {
      alert("Всі поля мають бути заповнені!!!");
    } else {
      const email = formElements.email.value;
      const password = formElements.password.value;
      const formData = {
        email,
        password,
      };
      console.log(formData);
      event.currentTarget.reset();
    }
  };
  addAlert();
}
