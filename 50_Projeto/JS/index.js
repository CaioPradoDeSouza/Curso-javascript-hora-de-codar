// função que adiciona a tarefa
function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {

        // clonar o template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover as classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adicionar tarefas na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        // adicionar o done event
        const doneBtn = newTask.querySelector('.done-btn').addEventListener("click", function () {
            completeTask(this);
        });

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });

    }
};

// function remove task
function removeTask(task) {
    task.parentNode.remove(true);
};


// evento de adicionar a tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener("click", function (e) {

    e.preventDefault();

    addTask();

    // remover task
    const taskTitle = document.querySelector('#task-title').value = "";
});

//funcao completar tarefas

function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");

};