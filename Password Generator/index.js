let generated_password = document.getElementById("generated-password");

let generate_password = document.getElementById("generate-password");

let copy_password = document.getElementById("copy-password");

let uppercase = document.getElementById("uppercase");

let lowercase = document.getElementById("lowercase");

let numbers = document.getElementById("numbers");

let symbols = document.getElementById("symbols");

let selected_size = document.getElementById("selected-size");

let upper_letters_literal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lower_letters_literal = "abcdefghijklmnopqrstuvwxyz";

let numeric_literal = "0123456789";

let symbols_literal = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

function generatePassword() {
  let characters = "";

  if (uppercase.checked) {
    characters += upper_letters_literal;
  }

  if (lowercase.checked) {
    characters += lower_letters_literal;
  }

  if (numbers.checked) {
    characters += numeric_literal;
  }

  if (symbols.checked) {
    characters += symbols_literal;
  }

  if (characters === "") {
    generated_password.value = "Select Something";

    return;
  }

  let result = "";

  for (let x = 0; x < selected_size.value; x++) {
    let random = Math.floor(Math.random() * characters.length);

    result += characters[random];
  }

  generated_password.value = result;
}

generate_password.addEventListener("click", generatePassword);

copy_password.addEventListener("click", () => {
  if (
    generated_password.value === "" ||
    generated_password.value === "Select Something"
  ) {
    alert("Please generate a password first");

    return;
  }

  navigator.clipboard.writeText(generated_password.value);
});
