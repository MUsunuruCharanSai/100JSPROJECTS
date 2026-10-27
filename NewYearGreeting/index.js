
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

function showGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Please enter your name! 😊";
        return;
    }

    greeting.textContent =
        `🎊 Happy New Year, ${name}! 🎊 Wishing you happiness, success, and lots of love!`;
}

greetButton.addEventListener("click", showGreeting);

nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        showGreeting();
    }
});
