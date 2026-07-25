document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("confirm-password-error").innerHTML = "";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm-password").value;

  if (name === "") {
    document.getElementById("name-error").innerHTML = "Name Not Found";
    valid = false;
  }
  if (email === "") {
    document.getElementById("email-error").innerHTML = "Email Not Found";
    valid = false;
  }
  if (password === "") {
    document.getElementById("password-error").innerHTML = "Password Not Found";
    valid = false;
  }
  if (confirm_password === "") {
    document.getElementById("confirm-password-error").innerHTML =
      "Confirm-Password Not Found";
    valid = false;
  } else if (password != confirm_password) {
    document.getElementById("confirm-password-error").innerHTML =
      "Password Not Matched";
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Sucessfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
  }
});
