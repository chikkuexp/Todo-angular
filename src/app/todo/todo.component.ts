import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { Http } from '@angular/http';

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
  private url = "http://localhost:3000/api/todos";

  constructor(private http: Http, private service : TodoServices) {
    // this.service = new TodoServices(http);
    this.newTodo = "";
    this.autoIncrement = 3;
    this.todoList = this.service.getTodos();
    this.http.get(this.url).subscribe(response => {
      this.todoList = response.json();
      console.log(response.json());
    });
   }

   onSave(){
     this.service.addTodo(this.autoIncrement, this.newTodo, 0);
     this.autoIncrement++;
     this.todoList = this.service.getTodos();
   }

   delete(id: string) {
      this.http.delete(this.url + '/' + id).subscribe(response => {
        let todo = { _id : response.json()._id, title : response.json().title, status: response.json().status }
        let index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
        console.log('Item deleted successfully!');
        console.log(response.json());
      });
   }

   update(item){
     console.log(item);
   }
  ngOnInit() {
  }

}
