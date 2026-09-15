const input = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

function sendMessage() {
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        const reply = getBotReply(message);
        addMessage(reply, "bot");
    }, 500);
}

function addMessage(message, type) {
    const div = document.createElement("div");

    div.className = `${type} message`;
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello! 😊 Nice to meet you.";
    }

    if (message.includes("name")) {
        return "I am Simple Bot 🤖.";
    }

    if (message.includes("how are you")) {
        return "I am doing great! 😄";
    }

    if (message.includes("javascript")) {
        return "JavaScript makes websites interactive!";
    }

    if (message.includes("bye")) {
        return "Goodbye! 👋 Have a great day!";
    }

    return "Sorry, I don't understand that yet.";
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});