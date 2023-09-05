export default class Project{
    constructor(title){
        this.title=title;
        this.projects=[];
    }
    
    get title(){ return this._title};
    get projects(){ return this._projects};

    set title(value){ this._title=value};
    set projects(value){ this._projects=value};
}