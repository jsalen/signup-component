import validateEmail from "./components/validateEmail.js";
import showError from "./components/showError.js";
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function (e) {
  console.log("event");
  e.preventDefault();
  if (firstName.value === "") {
    showError(1);
  } else if (lastName.value === "") {
    showError(2);
  } else if (!validateEmail(email.value)) {
    showError(3);
  } else if (password.value === "") {
    showError(4);
  }
});
