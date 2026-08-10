const watchBtn = document.getElementById("watchBtn");
const closeBtn = document.getElementById("closeBtn");
const trailer = document.getElementById("trailer");
const video = document.getElementById("video");

watchBtn.addEventListener("click", () => {
  trailer.style.display = "flex";
  video.play();
});

closeBtn.addEventListener("click", () => {
  trailer.style.display = "none";
  video.pause();
  video.currentTime = 0;
});
