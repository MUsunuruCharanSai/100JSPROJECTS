let image = document.getElementById("image");
let onButton = document.getElementById("on");
let offButton = document.getElementById("off");

function lightOn() {
  image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}

function lightOff() {
  image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}

onButton.addEventListener("click", lightOn);
offButton.addEventListener("click", lightOff);
