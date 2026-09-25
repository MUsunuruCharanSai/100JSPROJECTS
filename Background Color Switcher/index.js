function changeColor(color) {

    document.body.style.backgroundColor = color;

    document.getElementById("colorName").innerText = color;
}

function resetColor() {

    document.body.style.backgroundColor = "white";

    document.getElementById("colorName").innerText = "White";
}