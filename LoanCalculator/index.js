function calculateLoan(event) {
  event.preventDefault();

  let loanAmountValue = Number(document.getElementById("loan-amount").value);

  let interestRateValue = Number(
    document.getElementById("interest-rate").value,
  );

  let monthsToPayValue = Number(document.getElementById("months-to-pay").value);

  let interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

  let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(
    2,
  );

  document.getElementById("payment").innerHTML =
    `Monthly Payment: $${monthlyPayment}`;
}
