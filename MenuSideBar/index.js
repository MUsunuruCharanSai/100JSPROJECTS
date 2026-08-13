const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const sidebar = document.querySelector(".sidebar");

openButton.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
