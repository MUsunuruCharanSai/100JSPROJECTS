const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const totalImages = images.length;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    showSlide();
});

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = totalImages - 1;
    }
    showSlide();
});

setInterval(() => {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    showSlide();
}, 3000);