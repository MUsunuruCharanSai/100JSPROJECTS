function applyCoupon() {

    let amount = Number(document.getElementById("amount").value);
    let coupon = document.getElementById("coupon").value.toUpperCase();

    let discount = 0;

    if (coupon === "SAVE10") {
        discount = amount * 10 / 100;
    } 
    else if (coupon === "SAVE20") {
        discount = amount * 20 / 100;
    } 
    else {
        document.getElementById("message").innerText = "Invalid Coupon";
        return;
    }

    let finalPrice = amount - discount;

    document.getElementById("original").innerText = amount;
    document.getElementById("discount").innerText = discount;
    document.getElementById("final").innerText = finalPrice;

    document.getElementById("message").innerText = "Coupon Applied Successfully!";
}