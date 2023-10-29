export const addErrorMessage = (element, message, placement = "afterend") => {
  const errorMessage = document.createElement("div");
  element.classList.add("error");
  errorMessage.classList.add("error-text");
  errorMessage.innerHTML = message;
  element.insertAdjacentElement(placement, errorMessage);
};
