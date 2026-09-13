//Refrences elements-list.js
const modal_box = document.querySelector(".modal");
const closeBtn = document.querySelector(".close_modal_btn");
const getInfoBtn = document.querySelector("#get_element_info");
const main_element_tbl = document.querySelector("#main_elements")
const series_element_tbl = document.querySelector("#series_elements");
const element = openModal.target.closest("td");
const info_label = document.querySelector("#specific_info_label");
const info_content = document.querySelector("#specific_info_value")
const info_label_dropdown = document.querySelector("#more_info_dropdown");

function element_name_symbol() {
    const element_symbol = element.textContent;
    if (elements_main.hasOwnProperty(element_symbol)) {
        const element_name = elements_main.element_symbol.name;
    } else {const element_name = elements_lanth_act.element_symbol.name;}
}
function set_element_name_symbol(element_symbol, element_name) {
    element_name_symbol();
    modal_element_symbol.innerHTML = element_symbol;
    modal_element_name.innerHTML = element_name;
}
function openModal() {
    modal_box.classList.remove("hide");
    set_element_name_symbol();
}
function closeModal() {modal_box.classList.add("hide");}
function specificInfo() {
    const chosen_value = info_label_dropdown.value;
    if (elements_main.hasOwnProperty(element_symbol)) {
        const value = elements_main.element_symbol.chosen_value;
    } else {const value = elements_lanth_act.element_symbol.chosen_value;}
    info_label.innerHTML = chosen_value;
    info_content.innerHTML = value;
    info_label.classList.remove("hide");
    info_content.classList.remove("hide");
}

main_element_tbl.addEventListener("click", openModal)
series_element_tbl.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
getInfoBtn.addEventListener("click", specificInfo)