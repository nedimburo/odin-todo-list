import TodoApp from "./TodoApp";
import Project from "./project";
import Task from "./task";

export default class Storage{
    constructor(){
        this.todoContainer=new TodoApp();
        this.selectedProjectIndex;
    }

    get todoContainer(){ return this._todoContainer};
    get selectedProjectIndex(){ return this._selectedProjectIndex};
    
    set todoContainer(value){ this._todoContainer=value};
    set selectedProjectIndex(value){ this._selectedProjectIndex=value};

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

    removeProject(index){
        this.todoContainer._projects.splice(index, 1);
        this.storeLocalStorage();
        location.reload();
    }

    addNewTask(newTaskData){
        let newTask=new Task(newTaskData.title, newTaskData.description, newTaskData.dueDate, newTaskData.priority);
        this.todoContainer.addTaskToProject(newTask, this.selectedProjectIndex);
    }
}