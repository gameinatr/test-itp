const { addErrorMessage } = require("./utils");
const { validateForm } = require("./validation");

const sumbission = async () => {
  if (validateForm()) {
    const isSuccess = Math.random() * 10 > 5; // randomise submit result
    const url = isSuccess
      ? "https://my-json-server.typicode.com/gameinatr/dummy-server/success"
      : "https://my-json-server.typicode.com/gameinatr/dummy-server/error";
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "error") {
      Object.keys(data.fields).forEach((key) => {
        const input = document.querySelector(`input[name="${key}"]`);
        const errorMessage = data.fields[key];
        addErrorMessage(input, errorMessage);
      });
      return;
    }
    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll(
      ".form__input input, .form__input textarea"
    );
    inputs.forEach((input) => {
      input.value = "";
    });
    const button = document.querySelector("#submit-button");
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-text");
    successMessage.innerHTML = data.msg;
    button.insertAdjacentElement("afterend", successMessage);
  }
};

document.querySelector("#submit-button").addEventListener("click", sumbission);
