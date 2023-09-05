const displayController=(()=>{
    let projectsContainer=document.getElementById("projects-container");
    let projectInputContainer=document.getElementById("project-input-container");
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
    return{
        addProjectInput,
    }
})();

export default function initializeWebsite(){
    let addProjectButton=document.getElementById("add-project-button");
    addProjectButton.addEventListener("click", displayController.addProjectInput);
}