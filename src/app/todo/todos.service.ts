import { identifierModuleUrl } from '@angular/compiler';

export class TodoServices{
    private todos: ToDo[];
    private autoIncrement: number;

    constructor(){
        this.todos = [];
        this.autoIncrement = 1;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(id: number, title: string, status:number){
        let todo = new ToDo(this.autoIncrement, title, status);
        this.todos.push(todo);
        this.autoIncrement++;
    }

    deleteTodo(id: number){
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].ID ==id){
                this.todos.splice(i, 1);
            }
        }
    }

    getTodo(id: number){
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].ID == id){
                return this.todos[i];
            }
        }
        return new ToDo(0, '', 0);
    }
}

class ToDo {
    constructor(private id:number, private title:string, private status:number){}

    get ID(){
        return this.id;
    }

    get Title(){
        return this.title;
    }

    get Status(){
        return this.status;
    }
}