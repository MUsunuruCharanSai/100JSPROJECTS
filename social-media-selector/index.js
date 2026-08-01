let selected_input = document.getElementById("selected-input");
let listMain = document.querySelector(".list-main");
let mainitems = document.querySelectorAll(".list-sub");
console.log(mainitems)
selected_input.addEventListener("click", () => {
  listMain.classList.toggle("hide");
});

mainitems.forEach((item) => {
  item.addEventListener("click", () => {
    selected_input.innerHTML = item.innerHTML;
    listMain.classList.toggle("hide");
  });
});
