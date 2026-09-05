const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerText = "☀️ Light Mode";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDarkMode =
        document.body.classList.contains("dark");

    if (isDarkMode) {
        themeBtn.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});