const displayController=(()=>{
    let todoMainContainer=document.getElementById("todo-container");
    let addButtonsContainer=document.getElementById("buttons-container");
    let todoListing=document.getElementById("todo-listing");
    const createInputBox=type=>{
        addButtonsContainer.style.display="none";
        let inputContainer=document.createElement("div");
        inputContainer.setAttribute("id", "input-container");
        let inputField=document.createElement("input");
        inputField.setAttribute("id", "input-name-box");
        let submitButton=document.createElement("button");
        let cancelButton=document.createElement("button");
        submitButton.classList.add("input-field-button");
        cancelButton.classList.add("input-field-button");
        submitButton.classList.add("submit");
        cancelButton.classList.add("cancel");
        submitButton.textContent="Submit";
        cancelButton.textContent="Cancel";
        (type=="task") ? inputField.placeholder="Enter task title..." 
                        : inputField.placeholder="Enter project name...";
        inputContainer.appendChild(inputField);
        inputContainer.appendChild(submitButton);
        inputContainer.appendChild(cancelButton);
        todoMainContainer.appendChild(inputContainer);
    };
    return{
        createInputBox,
    }
})();

module.exports=displayController;