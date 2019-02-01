import { identifierModuleUrl } from '@angular/compiler';

export class TodoServices{
    private todos: ToDo[];

    constructor(){
        this.todos = [];
    }

    getTodos(){
        return this.todos;
    }

    addTodo(id: number, title: string, status:number){
        let todo = new ToDo(id, title, status);
        this.todos.push(todo)
    }

    deleteTodo(id: number){
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].ID ==id){
                this.todos.splice(i, 1);
            }
        }
    }
}

class ToDo {
    constructor(private id:number, private title:string, private status:number){}

    get ID(){
        return this.id;
    }
}