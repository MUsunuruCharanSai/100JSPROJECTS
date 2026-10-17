
function addComment() {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const list = document.getElementById("comments-list");

  if (name === "" || comment === "") {
    alert("Please enter your name and comment!");
    return;
  }

  const div = document.createElement("div");
  div.className = "comment";

  const username = document.createElement("strong");
  username.textContent = name;

  const message = document.createElement("p");
  message.textContent = comment;

  div.appendChild(username);
  div.appendChild(message);
  list.prepend(div);

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
