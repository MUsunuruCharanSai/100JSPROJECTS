let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();
function addTask() {
  let input = document.getElementById("entertodo");
  if (input.value.trim() == "") {
    alert("Please Enter Task.");
    return;
  }
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

function displayTasks() {
  let tasklist = document.getElementById("listItems");
  tasklist.innerHTML = "";
  for (let x = 0; x < tasks.length; x++) {
    tasklist.innerHTML += `<li class="eachItem">${tasks[x]} <button class="btn" onclick="deleteTask(${x})">Delete</button></li> `;
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
