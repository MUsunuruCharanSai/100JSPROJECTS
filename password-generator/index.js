function generatePassword() {

    let length = Number(document.getElementById("length").value);

    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }

    document.getElementById("password").value = password;
    document.getElementById("message").innerText = "";
}

function copyPassword() {

    let password = document.getElementById("password").value;

    if (password === "") {
        document.getElementById("message").innerText =
            "Generate a password first";
        return;
    }

    navigator.clipboard.writeText(password);

    document.getElementById("message").innerText =
        "Password copied!";
}