const taskInput = document.getElementById("taskInput");
const timeInput = document.getElementById("timeInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

const error = document.getElementById("error");


// Add task
addBtn.addEventListener("click", addTask);


// Allow Enter key to add task
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function addTask() {

    const taskName = taskInput.value.trim();
    const taskTime = timeInput.value;

    // Validation
    if (taskName === "") {
        error.textContent = "Please enter a task.";
        return;
    }

    if (taskTime === "") {
        error.textContent = "Please select a time.";
        return;
    }

    error.textContent = "";


    // Create task
    const li = document.createElement("li");

    li.classList.add("task");


    // Convert 24-hour time to 12-hour format
    const formattedTime = formatTime(taskTime);


    li.innerHTML = `
        <div class="task-info">

            <span class="task-name">
                ${taskName}
            </span>

            <span class="task-time">
                🕒 ${formattedTime}
            </span>

        </div>

        <div class="task-actions">

            <button class="complete-btn">
                Complete
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>
    `;


    // Complete task
    const completeBtn = li.querySelector(".complete-btn");

    completeBtn.addEventListener("click", function () {

        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeBtn.textContent = "Undo";
        } else {
            completeBtn.textContent = "Complete";
        }

    });


    // Delete task
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateTaskCount();

    });


    taskList.appendChild(li);

    taskInput.value = "";
    timeInput.value = "";

    taskInput.focus();


    updateTaskCount();
}


function formatTime(time) {

    let [hours, minutes] = time.split(":");

    hours = Number(hours);

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
}

function updateTaskCount() {

    const tasks = document.querySelectorAll(".task");

    const completedTasks =
        document.querySelectorAll(".task.completed");

    const remainingTasks =
        tasks.length - completedTasks.length;


    taskCount.textContent =
        `${remainingTasks} task${remainingTasks !== 1 ? "s" : ""} remaining`;
}