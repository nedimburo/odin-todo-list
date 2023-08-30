const displayController=(()=>{
    let todoMainContainer=document.getElementById("todo-container");
    let todoListing=document.getElementById("todo-listing");
    const createInputBox=type=>{
        todoMainContainer.style.gridTemplateRows="60px 45px 1fr";
        todoListing.style.gridRow="3 / 4";
        let inputField=document.createElement("input");
        inputField.classList.add("input-name-box");
        (type=="task") ? inputField.placeholder="Enter task title..." 
                        : inputField.placeholder="Enter project name...";
        todoMainContainer.appendChild(inputField);
    };
    return{
        createInputBox,
    }
})();

module.exports=displayController;