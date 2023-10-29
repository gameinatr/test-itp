import { addErrorMessage } from "./utils";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateForm = () => {
  const form = document.querySelector(".form");
  const previousErrors = form.querySelectorAll(".error-text");
  const successMessage = form.querySelector(".success-text");
  const inputs = form.querySelectorAll(
    ".form__input input, .form__input textarea"
  );
  if (previousErrors.length > 0) {
    previousErrors.forEach((error) => {
      error.remove();
    });
  }
  if (successMessage) {
    successMessage.remove();
  }
  const inputValidationResults = [];
  inputs.forEach((input) => {
    input.classList.remove("error");
    if (input.value === "") {
      const errorMessage = `${
        input.name.charAt(0).toUpperCase() + input.name.slice(1)
      } cannot be empty!`;
      addErrorMessage(input, errorMessage);
      inputValidationResults.push(false);
      return;
    }
    if (input.name === "email" && !validateEmail(input.value)) {
      const errorMessage = `Email is invalid!`;
      addErrorMessage(input, errorMessage);
      inputValidationResults.push(false);
      return;
    }
    inputValidationResults.push(true);
  });
  return inputValidationResults.some((result) => result);
};
