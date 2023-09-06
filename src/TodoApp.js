export default class TodoApp{
    constructor(){
        this.projects=[];
    }

    get projects(){ return this._projects};

    set projects(value){ this._projects=value};

    addProject(newProject){
        this.projects.push(newProject);
    }
}