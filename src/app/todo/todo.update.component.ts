import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.update.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoUpdateComponent implements OnInit {
    private title:string;
    private status:any;
    statusList: any;

    constructor(private service: TodoServices){
        this.title = "";
        this.status = 0;
        this.statusList = [
            {id: 0, name: "Not Completed"},
            {id: 1, name: "Completed"}
        ];
    }

    addTodo(f){
        this.service.addTodo(3, f.value.title, f.value.status.id);
        console.log(this.service.getTodos());
      }

    ngOnInit() {
    }
}