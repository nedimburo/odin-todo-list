export default class Project{
    constructor(title){
        this.title=title;
    }
    
    get title(){ return this._title};

    set title(value){ this._title=value};
}