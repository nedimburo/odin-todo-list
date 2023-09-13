import Storage from "./storage";

let storage=new Storage();

const displayController=(()=>{
    let projectsContainer=document.getElementById("projects-container");
    let addProjectButton=document.getElementById("add-project-button");
    let todoContainer=document.getElementById("todo-container");
    const addProjectInput=()=>{
        addProjectButton.disabled=true;
        let inputContainer=document.createElement("div");
        let inputField=document.createElement("input");
        let submitButton=document.createElement("button");
        let cancelButton=document.createElement("button");
        let submitImg=document.createElement("img");
        let cancelImg=document.createElement("img");
        inputContainer.setAttribute("id", "project-input-container");
        inputField.setAttribute("id", "project-input-field");
        submitButton.classList.add("project-buttons");
        submitButton.classList.add("submit");
        cancelButton.classList.add("project-buttons");
        cancelButton.classList.add("cancel");      
        inputField.placeholder="Enter project name...";
        submitImg.src="../dist/icons/check.svg";
        cancelImg.src="../dist/icons/close.svg";
        submitButton.addEventListener("click", ()=>{
            storage.addNewProject(inputField.value);
            projectsContainer.removeChild(inputContainer);
            addProjectButton.disabled=false;
            storage.storeLocalStorage();
            location.reload();
        });
        cancelButton.addEventListener("click", ()=>{
            projectsContainer.removeChild(inputContainer);
            addProjectButton.disabled=false;
        });
        submitButton.appendChild(submitImg);
        cancelButton.appendChild(cancelImg);
        inputContainer.appendChild(inputField);
        inputContainer.appendChild(submitButton);
        inputContainer.appendChild(cancelButton);
        projectsContainer.appendChild(inputContainer);
    };
    const generateProjects=()=>{
        for (let i=0; i<storage.todoContainer._projects.length; i++){
            let projectContainerItem=document.createElement("div");
            let projectButton=document.createElement("button");
            let projectDeleteButton=document.createElement("button");
            let deleteImg=document.createElement("img");
            deleteImg.src="../dist/icons/close.svg";
            projectButton.textContent=storage.todoContainer._projects[i]._title;
            projectButton.setAttribute("id", storage.todoContainer._projects[i]._title);
            projectContainerItem.classList.add("project-container-item");
            projectButton.classList.add("project-selector-button");
            deleteImg.classList.add("remove-project-button");
            projectDeleteButton.addEventListener("click", ()=>{
                storage.removeProject(i);
            });
            projectDeleteButton.appendChild(deleteImg);
            projectContainerItem.appendChild(projectButton);
            projectContainerItem.appendChild(projectDeleteButton);
            projectsContainer.appendChild(projectContainerItem);
        }
    };
    const generateProjectButtons=()=>{
        for (let i=0; i<storage._todoContainer._projects.length; i++){
            let projectButton=document.getElementById(`${storage._todoContainer._projects[i]._title}`);
            projectButton.addEventListener("click", ()=>{
                generateTasks(i);
            });
        }
    };
    const generateTasks=index=>{
        todoContainer.innerHTML="";
        storage._selectedProjectIndex=index;
        addTaskButton();
        if (storage._todoContainer._projects[index]._tasks.length==0){
            let message=document.createElement("h2");
            message.textContent="There are no assigned tasks in this project.";
            message.classList.add("task-message");
            todoContainer.appendChild(message);
        }
        else{
            generateTaskListContainer();
            updateTasksList();
        }
    };
    const generateTaskListContainer=()=>{
        let taskListContainer=document.createElement("div")
        taskListContainer.setAttribute("id", "task-list-container");
        todoContainer.appendChild(taskListContainer);
    };
    const updateTasksList=()=>{
        let taskListContainer=document.getElementById("task-list-container");
        taskListContainer.innerHTML="";
        for (let i=0; i<storage._todoContainer._projects[storage._selectedProjectIndex]._tasks.length; i++){
            let taskContainer=document.createElement("div");
            let taskTitle=document.createElement("div");
            let taskDate=document.createElement("div");
            let taskButtonsContainer=document.createElement("div");
            let moreButton=document.createElement("button");
            let editButton=document.createElement("button");
            let deleteButton=document.createElement("button");
            let moreImg=document.createElement("img");
            let editImg=document.createElement("img");
            let deleteImg=document.createElement("img");
            moreImg.src="../dist/icons/dots.svg";
            editImg.src="../dist/icons/edit.svg";
            deleteImg.src="../dist/icons/close.svg";
            taskContainer.classList.add("task-container");
            if (storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._priority=="1"){
                taskContainer.classList.add("low-priority");
            }
            else if(storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._priority=="2"){
                taskContainer.classList.add("medium-priority");
            }
            else{
                taskContainer.classList.add("high-priority");
            }
            taskTitle.classList.add("task-container-title");
            taskDate.classList.add("task-container-date");
            moreButton.classList.add("task-control-button");
            editButton.classList.add("task-control-button");
            deleteButton.classList.add("task-control-button");
            taskButtonsContainer.classList.add("task-button-container");
            taskTitle.textContent=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._title;
            taskDate.textContent=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._dueDate;
            moreButton.appendChild(moreImg);
            editButton.appendChild(editImg);
            deleteButton.appendChild(deleteImg);
            taskButtonsContainer.appendChild(moreButton);
            taskButtonsContainer.appendChild(editButton);
            taskButtonsContainer.appendChild(deleteButton);
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDate);
            taskContainer.appendChild(taskButtonsContainer);
            taskListContainer.appendChild(taskContainer);
        }
    };
    const addTaskButton=()=>{
        let addTaskButton=document.createElement("button");
        let addImg=document.createElement("img");
        addImg.src="../dist/icons/plus.svg";
        addImg.classList.add("add-task-icon");
        addTaskButton.appendChild(addImg);
        addTaskButton.setAttribute("id", "add-task-button");
        addTaskButton.innerHTML+="Add Task";
        addTaskButton.addEventListener("click", addTaskInput);
        todoContainer.appendChild(addTaskButton);
    };
    const addTaskInput=()=>{
        toggleClassTodoContainer();
        let taskButton=document.getElementById("add-task-button");
        taskButton.disabled=true;
        let addTaskContainer=document.createElement("div");
        let controlButtonsContainer=document.createElement("div");
        let submitButton=document.createElement("button");
        let cancelButton=document.createElement("button");
        addTaskContainer.setAttribute("id", "add-task-container");
        let formDesign=`<label for="task-title">Title:</label>
                        <input type="text" id="task-title" class="form-input"><br>
                        <label for="task-description">Description:</label>
                        <input type="text" id="task-description" class="form-input"><br>
                        <label for="task-date">Due Date:</label>
                        <input type="date" id="task-date" class="form-input"><br>
                        <label for="task-priority">Priority:</label>
                        <select id="task-priority" class="form-input">
                            <option value="3">Low</option>
                            <option value="2">Medium</option>
                            <option value="1">High</option>
                        </select>`;
        addTaskContainer.innerHTML=formDesign;
        submitButton.textContent="Submit";
        cancelButton.textContent="Cancel";
        controlButtonsContainer.setAttribute("id", "control-buttons-container");
        submitButton.classList.add("task-buttons");
        cancelButton.classList.add("task-buttons");
        submitButton.classList.add("submit");
        cancelButton.classList.add("cancel");
        submitButton.addEventListener("click", ()=>{
            let taskData={};
            taskData.title=document.getElementById("task-title").value;
            taskData.description=document.getElementById("task-description").value;
            taskData.dueDate=document.getElementById("task-date").value;
            taskData.priority=document.getElementById("task-priority").value;
            storage.addNewTask(taskData);
            storage.storeLocalStorage();
            taskButton.disabled=false;
            todoContainer.removeChild(addTaskContainer);
            toggleClassTodoContainer();
            updateTasksList();
        });
        cancelButton.addEventListener("click", ()=>{
            taskButton.disabled=false;
            todoContainer.removeChild(addTaskContainer);
            toggleClassTodoContainer();
        });
        controlButtonsContainer.appendChild(submitButton);
        controlButtonsContainer.appendChild(cancelButton);
        addTaskContainer.appendChild(controlButtonsContainer);
        todoContainer.appendChild(addTaskContainer);
    };
    const toggleClassTodoContainer=()=>{
        todoContainer.classList.toggle("todo-container-simple");
        todoContainer.classList.toggle("todo-container-adding-task");
    };
    return{
        addProjectInput,
        generateProjects,
        generateProjectButtons,
    }
})();

export default function initializeWebsite(){
    storage.getLocalStorage();
    console.log(storage.todoContainer);
    displayController.generateProjects();
    displayController.generateProjectButtons();
    let addProjectButton=document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", displayController.addProjectInput);
}