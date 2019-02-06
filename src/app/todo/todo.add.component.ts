import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.add.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoAddComponent implements OnInit {
    private title:string;
    private status:number;
    statusList: any;

    constructor(private service: TodoServices){
        this.title = "";
        this.status = 0;
        this.statusList = [
            {id: 0, name: "Not Completed"},
            {id: 1, name: "Completed"}
        ];
    }

    addTodo(){
        this.service.addTodo(3, this.title, 0);
        console.log(this.service.getTodos());
      }

    ngOnInit() {
    }
}