import TodoApp from "./TodoApp";
import Project from "./project";

export default class Storage{
    constructor(){
        this.todoContainer=new TodoApp();
    }

    get todoContainer(){ return this._todoContainer};
    
    set todoContainer(value){ this._todoContainer=value};

    getLocalStorage(){
        if (JSON.parse(localStorage.getItem("todo"))!=null){
            let todoContainerParse=JSON.parse(localStorage.getItem("todo"));
            this.todoContainer.projects=todoContainerParse._projects;
        }
        
    }

    storeLocalStorage(){
        localStorage.clear();
        let todoContainerStringify=JSON.stringify(this.todoContainer);
        localStorage.setItem("todo", todoContainerStringify);
    }

    addNewProject(newProjectName){
        let newProject=new Project(newProjectName);
        this.todoContainer.addProject(newProject);
    }
}