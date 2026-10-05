const hornBtn = document.getElementById("hornBtn");
const hornSound = document.getElementById("hornSound");

hornBtn.addEventListener("click", () => {
  hornSound.currentTime = 0;
  hornSound.play();
});