import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.update.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoUpdateComponent implements OnInit {
    private id:number;
    private title:string;
    private status:any;
    statusList: any;
    private message = "";

    constructor(private route:ActivatedRoute, private service: TodoServices){
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('id');
            let todo = service.getTodo(this.id);
            console.log(todo);
        });

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