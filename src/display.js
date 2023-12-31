import Storage from "./storage";
import { parseISO, differenceInCalendarDays, getMonth, startOfDay } from "date-fns";

let storage=new Storage();

const displayController=(()=>{
    let projectsContainer=document.getElementById("projects-container");
    let addProjectButton=document.getElementById("add-project-button");
    let todoContainer=document.getElementById("todo-container");
    const loadHome=()=>{
        todoContainer.innerHTML="";
        generateTaskListContainer();
        let taskListContainer=document.getElementById("task-list-container");
        let homeTitle=document.createElement("h2");
        homeTitle.textContent="\"All Tasks\"";
        homeTitle.setAttribute("id", "home-page-title");
        todoContainer.appendChild(homeTitle);
        for (let i=0; i<storage.todoContainer._projects.length; i++){
            for (let j=0; j<storage.todoContainer._projects[i]._tasks.length; j++){
                let homeTaskContainer=document.createElement("div");
                let homeTaskTitle=document.createElement("div");
                let homeTaskDate=document.createElement("div");
                let homeTaskProject=document.createElement("div");
                homeTaskContainer.classList.add("home-task-list-container");
                if (storage._todoContainer._projects[i]._tasks[j]._priority=="1"){
                    homeTaskContainer.classList.add("high-priority");
                }
                else if(storage._todoContainer._projects[i]._tasks[j]._priority=="2"){
                    homeTaskContainer.classList.add("medium-priority");
                }
                else{
                    homeTaskContainer.classList.add("low-priority");
                }
                homeTaskTitle.textContent=storage.todoContainer._projects[i]._tasks[j]._title;
                homeTaskDate.textContent=storage.todoContainer._projects[i]._tasks[j]._dueDate;
                homeTaskProject.textContent="Project: "+storage.todoContainer._projects[i]._title;
                homeTaskContainer.appendChild(homeTaskTitle);
                homeTaskContainer.appendChild(homeTaskDate);
                homeTaskContainer.appendChild(homeTaskProject);
                taskListContainer.appendChild(homeTaskContainer);
            }
        }
        if (taskListContainer.childNodes.length==0){
            let message=document.createElement("h2");
            message.textContent="All projects are empty. No tasks have been assigned.";
            message.classList.add("task-message");
            taskListContainer.appendChild(message);
        }
    };
    const loadToday=()=>{
        todoContainer.innerHTML="";
        generateTaskListContainer();
        let taskListContainer=document.getElementById("task-list-container");
        let homeTitle=document.createElement("h2");
        homeTitle.textContent="\"Tasks with due date of Today\"";
        homeTitle.setAttribute("id", "home-page-title");
        todoContainer.appendChild(homeTitle);
        for (let i=0; i<storage.todoContainer._projects.length; i++){
            for (let j=0; j<storage.todoContainer._projects[i]._tasks.length; j++){
                var tempDate=parseISO(storage.todoContainer._projects[i]._tasks[j]._dueDate);
                if (differenceInCalendarDays(tempDate, new Date())==0){
                    let homeTaskContainer=document.createElement("div");
                    let homeTaskTitle=document.createElement("div");
                    let homeTaskDate=document.createElement("div");
                    let homeTaskProject=document.createElement("div");
                    homeTaskContainer.classList.add("home-task-list-container");
                    if (storage._todoContainer._projects[i]._tasks[j]._priority=="1"){
                        homeTaskContainer.classList.add("high-priority");
                    }
                    else if(storage._todoContainer._projects[i]._tasks[j]._priority=="2"){
                        homeTaskContainer.classList.add("medium-priority");
                    }
                    else{
                        homeTaskContainer.classList.add("low-priority");
                    }
                    homeTaskTitle.textContent=storage.todoContainer._projects[i]._tasks[j]._title;
                    homeTaskDate.textContent=storage.todoContainer._projects[i]._tasks[j]._dueDate;
                    homeTaskProject.textContent="Project: "+storage.todoContainer._projects[i]._title;
                    homeTaskContainer.appendChild(homeTaskTitle);
                    homeTaskContainer.appendChild(homeTaskDate);
                    homeTaskContainer.appendChild(homeTaskProject);
                    taskListContainer.appendChild(homeTaskContainer);
                }
            }
        }
        if (taskListContainer.childNodes.length==0){
            let message=document.createElement("h2");
            message.textContent="No tasks have been assigned for today.";
            message.classList.add("task-message");
            taskListContainer.appendChild(message);
        }
    };
    const loadThisWeek=()=>{
        todoContainer.innerHTML="";
        generateTaskListContainer();
        let taskListContainer=document.getElementById("task-list-container");
        let homeTitle=document.createElement("h2");
        homeTitle.textContent="\"Tasks with due date of This week\"";
        homeTitle.setAttribute("id", "home-page-title");
        todoContainer.appendChild(homeTitle);
        for (let i=0; i<storage.todoContainer._projects.length; i++){
            for (let j=0; j<storage.todoContainer._projects[i]._tasks.length; j++){
                var tempDate=parseISO(storage.todoContainer._projects[i]._tasks[j]._dueDate);
                if (differenceInCalendarDays(tempDate, new Date())<=7 && differenceInCalendarDays(tempDate, new Date())>=0){
                    let homeTaskContainer=document.createElement("div");
                    let homeTaskTitle=document.createElement("div");
                    let homeTaskDate=document.createElement("div");
                    let homeTaskProject=document.createElement("div");
                    homeTaskContainer.classList.add("home-task-list-container");
                    if (storage._todoContainer._projects[i]._tasks[j]._priority=="1"){
                        homeTaskContainer.classList.add("high-priority");
                    }
                    else if(storage._todoContainer._projects[i]._tasks[j]._priority=="2"){
                        homeTaskContainer.classList.add("medium-priority");
                    }
                    else{
                        homeTaskContainer.classList.add("low-priority");
                    }
                    homeTaskTitle.textContent=storage.todoContainer._projects[i]._tasks[j]._title;
                    homeTaskDate.textContent=storage.todoContainer._projects[i]._tasks[j]._dueDate;
                    homeTaskProject.textContent="Project: "+storage.todoContainer._projects[i]._title;
                    homeTaskContainer.appendChild(homeTaskTitle);
                    homeTaskContainer.appendChild(homeTaskDate);
                    homeTaskContainer.appendChild(homeTaskProject);
                    taskListContainer.appendChild(homeTaskContainer);
                }
            }
        }
        if (taskListContainer.childNodes.length==0){
            let message=document.createElement("h2");
            message.textContent="No tasks have been assigned for this week.";
            message.classList.add("task-message");
            taskListContainer.appendChild(message);
        }
    };
    const loadThisMonth=()=>{
        todoContainer.innerHTML="";
        generateTaskListContainer();
        let taskListContainer=document.getElementById("task-list-container");
        let homeTitle=document.createElement("h2");
        homeTitle.textContent="\"Tasks with due date of This month\"";
        homeTitle.setAttribute("id", "home-page-title");
        todoContainer.appendChild(homeTitle);
        let currentMonth=getMonth(new Date());
        for (let i=0; i<storage.todoContainer._projects.length; i++){
            for (let j=0; j<storage.todoContainer._projects[i]._tasks.length; j++){
                var tempDate=parseISO(storage.todoContainer._projects[i]._tasks[j]._dueDate);
                if (currentMonth==getMonth(tempDate)){
                    let homeTaskContainer=document.createElement("div");
                    let homeTaskTitle=document.createElement("div");
                    let homeTaskDate=document.createElement("div");
                    let homeTaskProject=document.createElement("div");
                    homeTaskContainer.classList.add("home-task-list-container");
                    if (storage._todoContainer._projects[i]._tasks[j]._priority=="1"){
                        homeTaskContainer.classList.add("high-priority");
                    }
                    else if(storage._todoContainer._projects[i]._tasks[j]._priority=="2"){
                        homeTaskContainer.classList.add("medium-priority");
                    }
                    else{
                        homeTaskContainer.classList.add("low-priority");
                    }
                    homeTaskTitle.textContent=storage.todoContainer._projects[i]._tasks[j]._title;
                    homeTaskDate.textContent=storage.todoContainer._projects[i]._tasks[j]._dueDate;
                    homeTaskProject.textContent="Project: "+storage.todoContainer._projects[i]._title;
                    homeTaskContainer.appendChild(homeTaskTitle);
                    homeTaskContainer.appendChild(homeTaskDate);
                    homeTaskContainer.appendChild(homeTaskProject);
                    taskListContainer.appendChild(homeTaskContainer);
                }
            }
        }
        if (taskListContainer.childNodes.length==0){
            let message=document.createElement("h2");
            message.textContent="No tasks have been assigned for the ongoing month.";
            message.classList.add("task-message");
            taskListContainer.appendChild(message);
        }
    };
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
        addTaskButton()
        generateTaskListContainer();
        updateTasksList();
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
                taskContainer.classList.add("high-priority");
            }
            else if(storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._priority=="2"){
                taskContainer.classList.add("medium-priority");
            }
            else{
                taskContainer.classList.add("low-priority");
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
            moreButton.addEventListener("click", ()=>{
                taskContainer.classList.toggle("bigger-task-container");
                let descriptionTitle=document.createElement("div");
                descriptionTitle.textContent="Description:";
                descriptionTitle.classList.add("task-container-description");
                let descriptionBox=document.createElement("div");
                if (storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._description==""){
                    descriptionBox.textContent="No description assigned for this task.";
                }
                else{
                    descriptionBox.textContent=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[i]._description;
                }
                descriptionBox.classList.add("task-container-description-box");
                if (taskContainer.childNodes.length==5){
                    taskContainer.removeChild(taskContainer.lastChild);
                    taskContainer.removeChild(taskContainer.lastChild);
                }
                else if (taskContainer.childNodes.length==4){
                    taskContainer.classList.toggle("edit-task-container");
                    taskContainer.removeChild(taskContainer.lastChild);
                    taskContainer.appendChild(descriptionTitle);
                    taskContainer.appendChild(descriptionBox);
                }
                else{
                    taskContainer.appendChild(descriptionTitle);
                    taskContainer.appendChild(descriptionBox);
                }               
            });
            editButton.addEventListener("click", ()=>{
                taskContainer.classList.toggle("edit-task-container");
                let editTaskFormContainer=document.createElement("div");
                editTaskFormContainer.classList.add("task-container-edit-form-container");
                let formDesign=`<label for="task-title-${i}">Title:</label>
                        <input type="text" id="task-title-${i}" class="form-input"><br>
                        <label for="task-description-${i}">Description:</label>
                        <input type="text" id="task-description-${i}" class="form-input" placeholder="(optional)"><br>
                        <label for="task-date-${i}">Due Date:</label>
                        <input type="date" id="task-date-${i}" class="form-input"><br>
                        <label for="task-priority-${i}">Priority:</label>
                        <select id="task-priority-${i}" class="form-input">
                            <option value="3">Low</option>
                            <option value="2">Medium</option>
                            <option value="1">High</option>
                        </select>`;
                editTaskFormContainer.innerHTML=formDesign;
                let controlButtonsContainer=document.createElement("div");
                let editButton=document.createElement("button");
                let cancelButton=document.createElement("button");
                editButton.textContent="Edit";
                cancelButton.textContent="Cancel";
                controlButtonsContainer.setAttribute("id", "control-buttons-container");
                editButton.classList.add("task-buttons");
                cancelButton.classList.add("task-buttons");
                editButton.classList.add("submit");
                cancelButton.classList.add("cancel");
                editButton.addEventListener("click", ()=>{
                    let taskData={};
                    taskData.title=document.getElementById(`task-title-${i}`).value;
                    taskData.description=document.getElementById(`task-description-${i}`).value;
                    taskData.dueDate=document.getElementById(`task-date-${i}`).value;
                    taskData.priority=document.getElementById(`task-priority-${i}`).value;
                    if (taskData.title==""){
                        alert("Title can't be blank. Please enter new title.");
                        return;
                    }
                    if (taskData.dueDate==""){
                        alert("Due date can't be blank. Please select new due date.");
                        return;
                    }
                    storage.editTask(taskData, i);
                    storage.storeLocalStorage();
                    updateTasksList();
                });
                cancelButton.addEventListener("click", ()=>{
                    taskContainer.classList.toggle("edit-task-container");
                    taskContainer.removeChild(taskContainer.lastChild);
                });
                controlButtonsContainer.appendChild(editButton);
                controlButtonsContainer.appendChild(cancelButton);
                editTaskFormContainer.appendChild(controlButtonsContainer);
                if (taskContainer.childNodes.length==4){
                    taskContainer.removeChild(taskContainer.lastChild);
                }
                else if (taskContainer.childNodes.length==5){
                    taskContainer.classList.toggle("bigger-task-container");
                    taskContainer.removeChild(taskContainer.lastChild);
                    taskContainer.removeChild(taskContainer.lastChild);
                    taskContainer.appendChild(editTaskFormContainer);
                }
                else{
                    taskContainer.appendChild(editTaskFormContainer);
                }
            });
            editButton.addEventListener("click", ()=>{
                if (taskContainer.classList.contains("edit-task-container")){
                    assignBaseValues(i);
                }
            });
            deleteButton.addEventListener("click", ()=>{
                storage.removeTask(storage._selectedProjectIndex, i);
                updateTasksList();
            });
            taskButtonsContainer.appendChild(moreButton);
            taskButtonsContainer.appendChild(editButton);
            taskButtonsContainer.appendChild(deleteButton);
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDate);
            taskContainer.appendChild(taskButtonsContainer);
            taskListContainer.appendChild(taskContainer);
        }
        if (taskListContainer.childNodes.length==0){
            let message=document.createElement("h2");
            message.textContent="There are no tasks assigned for this project.";
            message.classList.add("task-message");
            taskListContainer.appendChild(message);
        }
    };
    const assignBaseValues=index=>{
        let baseTitle=document.getElementById(`task-title-${index}`);
        let baseDescription=document.getElementById(`task-description-${index}`);
        let baseDueDate=document.getElementById(`task-date-${index}`);
        let basePriority=document.getElementById(`task-priority-${index}`);
        baseTitle.value=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[index]._title;
        baseDescription.value=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[index]._description;
        baseDueDate.value=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[index]._dueDate;
        basePriority.value=storage._todoContainer._projects[storage._selectedProjectIndex]._tasks[index]._priority;
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
                        <input type="text" id="task-description" class="form-input" placeholder="(optional)"><br>
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
            if (taskData.title==""){
                alert("Please enter the title of the task.");
                return;
            }
            if (taskData.dueDate==""){
                alert("Please select the due date for the task.");
                return;
            }
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
    const assignPageButtons=()=>{
        let homeButton=document.getElementById("home-button");
        homeButton.addEventListener("click", loadHome);
        let todayButton=document.getElementById("today-button");
        todayButton.addEventListener("click", loadToday);
        let thisWeekButton=document.getElementById("week-button");
        thisWeekButton.addEventListener("click", loadThisWeek);
        let thisMonthButton=document.getElementById("month-button");
        thisMonthButton.addEventListener("click", loadThisMonth);
        let addProjectButton=document.getElementById("add-project-button");
        addProjectButton.addEventListener("click", addProjectInput);
    };
    return{
        loadHome,
        assignPageButtons,
        generateProjects,
        generateProjectButtons,
    }
})();

export default function initializeWebsite(){
    storage.getLocalStorage();
    displayController.loadHome();
    displayController.generateProjects();
    displayController.generateProjectButtons();
    displayController.assignPageButtons();
}