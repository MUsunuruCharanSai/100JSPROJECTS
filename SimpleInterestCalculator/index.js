function calculateInterest(){

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);

    if(principal <= 0 || rate <= 0 || time <= 0){
        document.getElementById("result").innerHTML =
        "Please enter valid values.";
        return;
    }

    let interest = (principal * rate * time) / 100;
    let totalAmount = principal + interest;

    document.getElementById("result").innerHTML = `
        Interest: ₹${interest.toFixed(2)} <br>
        Total Amount: ₹${totalAmount.toFixed(2)}
    `;
}