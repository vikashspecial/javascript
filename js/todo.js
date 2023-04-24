const titleEl = document.getElementById("title");
const taskEl = document.getElementById("task");
const dateEl = document.getElementById("date");

const todoList = document.getElementById("todo-list");

const formContainer = document.querySelector(".form-container");

const toggleCreateEl = document.getElementById("toggleCreate");

const createToDo = document.getElementById("createToDo");

const bodyEl = document.getElementsByTagName("body")[0];

createToDo.addEventListener("click", function() {
    validateTask();
});

todoList.addEventListener("mouseenter", function() {
    todoList.classList.add("make-red");
});

todoList.addEventListener("mouseout", function() {
    todoList.classList.remove("make-red");
});


function handleResize() {
    if (window.innerWidth < 500) {
        bodyEl.classList.add("danger");
    } else {
        bodyEl.classList.remove("danger");
    }
}


handleResize();
window.addEventListener("resize", handleResize);

function validateTask() {
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
        createTask();
    }
}

function createTask() {
    const cardHtml = `
        <div class="todo-item">
            <div class="title">${titleEl.value}</div>
            <div class="task">${taskEl.value}</div>
            <div class="date">${dateEl.value}</div>
        </div>
    `;

    todoList.innerHTML += cardHtml;

    titleEl.value = "";
    taskEl.value = "";
    dateEl.value = "";

    toggleCreate();

}

let showCreate = false;

function toggleCreate() {
    if (showCreate == false) {
        formContainer.classList.add("show");
        toggleCreateEl.innerHTML = "Hide ToDo";
        showCreate = true;
    } else {
        formContainer.classList.remove("show");
        toggleCreateEl.innerHTML = "Show ToDo";
        showCreate = false;
    }
}