const input = document.getElementById("input");
const list = document.getElementById("listc");

function addTask() {
    if (input.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
        checkAllTasks();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        checkAllTasks();
    }
}, false);

function checkAllTasks() {
    const tasks = list.querySelectorAll("li");
    const allChecked = Array.from(tasks).every(task => task.classList.contains("checked"));
    if (allChecked && tasks.length > 0) {
        list.innerHTML = "";
        saveData();
        alert("All tasks are completed. Clearing the list.");
    }
}

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTasks() {
    list.innerHTML = localStorage.getItem("data");
}

showTasks();