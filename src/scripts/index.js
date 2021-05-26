import validateEmail from "./components/validateEmail.js";
import showError from "./components/showError.js";
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

firstName.addEventListener("input", function () {
  if (firstName.value === "") {
    showError(1, true);
  } else {
    showError(1, false);
  }
});

lastName.addEventListener("input", function () {
  if (lastName.value === "") {
    showError(2, true);
  } else {
    showError(2, false);
  }
});

email.addEventListener("input", function () {
  if (!validateEmail(email.value)) {
    showError(3, true);
  } else {
    showError(3, false);
  }
});

password.addEventListener("input", function () {
  if (password.value === "") {
    showError(4, true);
  } else {
    showError(4, false);
  }
});
