function calculateTip() {
  const bill = Number(document.getElementById("bill").value);
  const tip = Number(document.getElementById("tip").value);
  const people = Number(document.getElementById("people").value);

  if (bill <= 0 || tip < 0 || people <= 0) {
    alert("Please enter valid values!");
    return;
  }

  const totalTip = (bill * tip) / 100;
  const totalAmount = bill + totalTip;
  const perPerson = totalAmount / people;

  document.getElementById("totalTip").textContent = totalTip.toFixed(2);
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
  document.getElementById("perPerson").textContent = perPerson.toFixed(2);
}
