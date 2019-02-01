import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoComponent implements OnInit {

  private title = "List Of ToDos";
  private todoList;
  public newTodo : string;
  private autoIncrement : number;

  constructor(private service: TodoServices) {
    // this.service.addTodo(1, "This is the first todo", 0);
    // this.service.addTodo(2, "This is the second todo", 1);

    this.newTodo = "";
    this.autoIncrement = 3;
    this.todoList = service.getTodos();
   }

   onSave(){
     this.service.addTodo(this.autoIncrement, this.newTodo, 0);
     this.autoIncrement++;
     this.todoList = this.service.getTodos();
   }

   delete(id:number) {
     this.service.deleteTodo(id);
     this.todoList = this.service.getTodos();
   }

   update(item){
     console.log(item);
   }
  ngOnInit() {
  }

}
