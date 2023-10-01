export default class TodoApp{
    constructor(){
        this.projects=[];
    }

    get projects(){ return this._projects};

    set projects(value){ this._projects=value};

    validateProjectTitle(title){
        for (let i=0; i<this.projects.length; i++){
            if (title==this.projects[i]._title){
                return false;
            }
        }
        return true;
    }

    addProject(newProject){
        this.projects.push(newProject);
    }

    addTaskToProject(newTask, targetedProject){
        this.projects[targetedProject]._tasks.push(newTask);
    }

    editTaskData(taskData, projectIndex, taskIndex){
        this.projects[projectIndex]._tasks[taskIndex]._title=taskData.title;
        this.projects[projectIndex]._tasks[taskIndex]._description=taskData.description;
        this.projects[projectIndex]._tasks[taskIndex]._dueDate=taskData.dueDate;
        this.projects[projectIndex]._tasks[taskIndex]._priority=taskData.priority;
    }
}