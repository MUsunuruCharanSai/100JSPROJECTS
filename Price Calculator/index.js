let quantity = 1;

let price = 500;

function increase() {

    quantity++;

    update();
}

function decrease() {

    if (quantity > 1) {
        quantity--;
    }

    update();
}

function update() {

    document.getElementById("quantity").innerText = quantity;

    let total = quantity * price;

    document.getElementById("total").innerText = total;
}