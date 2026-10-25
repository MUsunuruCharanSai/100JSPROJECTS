const text = document.getElementById("text");

const words = ["Developer", "Designer", "Programmer", "Engineer"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    text.textContent = word.substring(0, charIndex);

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === word.length) {
        deleting = true;
        speed = 1000;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();