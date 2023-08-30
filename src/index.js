import displayController from "./display";

let addTask=document.getElementById("add-task");
addTask.addEventListener("click", ()=>{
    displayController.createInputBox("task");
});

let addProject=document.getElementById("add-project");
addProject.addEventListener("click", ()=>{
    displayController.createInputBox("project");
});
