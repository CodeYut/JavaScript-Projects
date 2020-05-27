const modalBtn = document.querySelector(".modal-button");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-button");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});