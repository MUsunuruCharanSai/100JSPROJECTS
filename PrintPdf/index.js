const dateInput = document.getElementById("date");
const headingInput = document.getElementById("heading");
const contentInput = document.getElementById("content");

const showDate = document.getElementById("showDate");
const showHeading = document.getElementById("showHeading");
const showContent = document.getElementById("showContent");

// Set today's date automatically
dateInput.valueAsDate = new Date();

function updatePreview() {
    showDate.textContent = dateInput.value;
    showHeading.textContent = headingInput.value || "Your Heading";
    showContent.textContent =
        contentInput.value || "Your content will appear here...";
}

dateInput.addEventListener("input", updatePreview);
headingInput.addEventListener("input", updatePreview);
contentInput.addEventListener("input", updatePreview);

function printPDF() {
    updatePreview();
    window.print();
}