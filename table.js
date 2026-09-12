//Refrences elements-list.js
const modal_box = document.querySelector(".modal");
const closeBtn = document.querySelector(".close_modal_btn");

function openModal() {modal_box.classList.remove("hide");}
function closeModal() {modal_box.classList.add("hide");}

closeBtn.addEventListener("click", closeModal)