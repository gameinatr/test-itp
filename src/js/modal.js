const toggleModal = ({ target }) => {
  if (target.classList.contains("modal")) return;
  document.body.classList.toggle("overlay-active");
  document.querySelector(".overlay").classList.toggle("overlay_active");
};

document
  .querySelector("#modal-button")
  .addEventListener("click", (e) => toggleModal(e));
document
  .querySelector(".overlay")
  .addEventListener("click", (e) => toggleModal(e));
