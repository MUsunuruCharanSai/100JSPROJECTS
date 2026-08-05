let btn = document.getElementById("btn");
let three_secret_button = document.getElementById("three-secret-button");
let one_secret_button = document.getElementById("one-secret-button");

let click = 0;
let timer;

btn.addEventListener("click", () => {
  click++;

  if (click === 1) {
    one_secret_button.style.display = "block";
    timer = setTimeout(() => {
      click = 0;
    }, 500);
  }

  if (click === 3) {
    clearTimeout(timer);
    one_secret_button.style.display = "none";
    three_secret_button.style.display = "block";
    click = 0;
  }
});
