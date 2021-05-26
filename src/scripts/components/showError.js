const showError = (child, boolean) => {
  const textError = document.querySelector(
    `form > .form-input:nth-child(${child}) > .text-error`
  );

  const iconError = document.querySelector(
    `form > .form-input:nth-child(${child}) > .icon-error`
  );

  if (boolean) {
    textError.style.display = "block";
    iconError.style.display = "block";
    return;
  } else {
    textError.style.display = "none";
    iconError.style.display = "none";
    return;
  }
};

export default showError;
