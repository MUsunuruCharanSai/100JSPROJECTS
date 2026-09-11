const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const frequencyInput = document.getElementById("frequency");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const error = document.getElementById("error");

const principalResult = document.getElementById("principalResult");
const interestResult = document.getElementById("interestResult");
const finalResult = document.getElementById("finalResult");


// Calculate Compound Interest
calculateBtn.addEventListener("click", function () {

    const principal = Number(principalInput.value);
    const rate = Number(rateInput.value);
    const time = Number(timeInput.value);
    const frequency = Number(frequencyInput.value);

    // Validation
    if (
        principal <= 0 ||
        rate < 0 ||
        time <= 0
    ) {
        error.textContent = "Please enter valid values.";
        result.style.display = "none";
        return;
    }

    error.textContent = "";



    const decimalRate = rate / 100;

    const finalAmount =
        principal *
        Math.pow(
            1 + decimalRate / frequency,
            frequency * time
        );

    const totalInterest = finalAmount - principal;

    // Display results
    principalResult.textContent = formatCurrency(principal);
    interestResult.textContent = formatCurrency(totalInterest);
    finalResult.textContent = formatCurrency(finalAmount);

    result.style.display = "block";
});


// Reset calculator
resetBtn.addEventListener("click", function () {

    principalInput.value = "";
    rateInput.value = "";
    timeInput.value = "";
    frequencyInput.value = "12";

    result.style.display = "none";
    error.textContent = "";
});


function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);
}