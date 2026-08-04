let allclasses = document.querySelectorAll(".sub");
let next_btn = document.getElementById("next");
let prev_btn = document.getElementById("prev");
let names = document.querySelectorAll(".hide");
let counter = 0;
next_btn.onclick = function nextClick() {
  if (counter < allclasses.length) {
    console.log(counter);
    allclasses[counter].innerHTML = '<span class="tick">✔</span>';
    names[counter].style.display = "block";
    counter++;
  }
};
prev_btn.onclick = function () {
  if (counter > 0) {
    counter--;
    console.log(counter);
    allclasses[counter].innerHTML = "";
  }
};
console.log(allclasses);
