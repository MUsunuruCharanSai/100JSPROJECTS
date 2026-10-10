const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "a@d.com" && password === "abc") {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid email or password!";
    message.style.color = "red";
  }
});
