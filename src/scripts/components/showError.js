const showError = (child) => {
  const textError = document.querySelector(
    `form > .form-input:nth-child(${child}) > .text-error`
  );

  const iconError = document.querySelector(
    `form > .form-input:nth-child(${child}) > .icon-error`
  );
  textError.style.display = "block";
  iconError.style.display = "block";
  return;
};

export default showError;
