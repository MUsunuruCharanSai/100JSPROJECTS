const quotes = [
    "Believe in yourself.",
    "Success comes from hard work.",
    "Never give up.",
    "Dream big and work hard.",
    "Every day is a new opportunity.",
    "Your future depends on what you do today.",
    "Stay focused and keep moving forward.",
    "Small steps lead to big results.",
    "Make today better than yesterday.",
    "You are capable of amazing things."
];

let index = 0;

function showQuote() {
    document.getElementById("quote").textContent = quotes[index];

    index++;

    if (index === quotes.length) {
        index = 0;
    }
}

showQuote();

setInterval(showQuote, 5000);