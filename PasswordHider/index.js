const password = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        password.type = "password";
        toggleBtn.textContent = "Show";
    }
});