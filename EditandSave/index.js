const textBox = document.getElementById("textBox");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");
const message = document.getElementById("message");

// Load saved text
textBox.value = localStorage.getItem("myText") || "This is my text.";

// Edit button
editBtn.addEventListener("click", () => {
    textBox.disabled = false;
    textBox.focus();

    message.textContent = "You can edit the text.";
});

// Save button
saveBtn.addEventListener("click", () => {
    localStorage.setItem("myText", textBox.value);

    textBox.disabled = true;

    message.textContent = "Text saved successfully!";
});