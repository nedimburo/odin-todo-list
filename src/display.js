import Storage from "./storage";

let storage=new Storage();

const displayController=(()=>{
    let projectsContainer=document.getElementById("projects-container");
    let addProjectButton=document.getElementById("add-project-button");
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
            projectDeleteButton.appendChild(deleteImg);
            projectContainerItem.appendChild(projectButton);
            projectContainerItem.appendChild(projectDeleteButton);
            projectsContainer.appendChild(projectContainerItem);
        }
    };
    return{
        addProjectInput,
        generateProjects,
    }
})();

export default function initializeWebsite(){
    storage.getLocalStorage();
    console.log(storage.todoContainer);
    displayController.generateProjects();
    let addProjectButton=document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", displayController.addProjectInput);
}