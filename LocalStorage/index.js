function saveName() {
  let name = document.getElementById("username").value;

  localStorage.setItem("username", name);

  alert("Name saved!");
}

function showName() {
  let name = localStorage.getItem("username");

  document.getElementById("result").innerText = "Hello " + name;
}
