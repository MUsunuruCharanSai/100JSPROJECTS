function generateColor() {

    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById("colorBox").style.backgroundColor = color;
    document.getElementById("colorCode").innerText = color;
}

function copyColor() {

    let color = document.getElementById("colorCode").innerText;

    navigator.clipboard.writeText(color);

    document.getElementById("message").innerText = "Color copied!";
}