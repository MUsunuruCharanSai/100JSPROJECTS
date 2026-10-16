
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

let step = 0;
let order = {};

const questions = [
  "What would you like? Pizza, Burger, or Biryani?",
  "How many items do you want?",
  "What is your delivery address?"
];

function addMessage(message, sender) {
  const div = document.createElement("div");
  div.className = sender;
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const answer = input.value.trim();

  if (!answer) return;

  addMessage(answer, "user");
  input.value = "";

  if (step === 0) {
    const food = answer.toLowerCase();

    if (!["pizza", "burger", "biryani"].includes(food)) {
      addMessage("Please choose Pizza, Burger, or Biryani.", "bot");
      return;
    }

    order.food = food;
  }

  if (step === 1) {
    const quantity = Number(answer);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      addMessage("Enter a quantity from 1 to 20.", "bot");
      return;
    }

    order.quantity = quantity;
  }

  if (step === 2) {
    order.address = answer;

    addMessage(
      `Order Summary 🍽️
Food: ${order.food}
Quantity: ${order.quantity}
Address: ${order.address}
Your order has been recorded!`,
      "bot"
    );

    step++;
    input.disabled = true;
    document.querySelector("button").disabled = true;
    return;
  }

  step++;
  addMessage(questions[step], "bot");
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") sendMessage();
});

// Start asking predefined questions automatically
addMessage(questions[0], "bot");
