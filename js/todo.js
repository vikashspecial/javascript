function validateTask() {

    const titleEl = document.getElementById("title");
    const taskEl = document.getElementById("task");
    const dateEl = document.getElementById("date");

    if (titleEl.value == "") {
        alert("Please enter title");
        titleEl.focus();
    } else if (taskEl.value == "") {
        alert("Please enter task");
        taskEl.focus();
    } else if (dateEl.value == "") {
        alert ("Please enter date");
        dateEl.focus();
    } else {
        createTask(titleEl.value, taskEl.value, dateEl.value);
    }
}

function createTask(title, task, date) {
    
}