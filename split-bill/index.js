function calculate() {

    let bill = Number(document.getElementById("bill").value);
    let tipPercent = Number(document.getElementById("tip").value);
    let people = Number(document.getElementById("people").value);

    if (bill <= 0 || people <= 0) {
        alert("Enter valid details");
        return;
    }

    let tip = bill * tipPercent / 100;
    let total = bill + tip;
    let perPerson = total / people;

    document.getElementById("tipAmount").innerText = tip.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("person").innerText = perPerson.toFixed(2);
}