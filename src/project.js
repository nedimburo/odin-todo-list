export default class Project{
    constructor(title){
        this.title=title;
        this.tasks=[];
    }
    
    get title(){ return this._title};
    get tasks(){ return this._tasks};

    set title(value){ this._title=value};
    set tasks(value){ this._tasks=value};
}