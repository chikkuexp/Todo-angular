import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.add.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoAddComponent implements OnInit {
    private title:string;
    private status:any;
    statusList: any;
    private message = "";
    private timerSubsciption;

    constructor(private router:Router, private service: TodoServices){
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
        f.reset();
        this.message = "Todo added successfully!";

        this.timerSubsciption = interval(2000).subscribe(
            () => {
                this.router.navigate(['/todo'])
            },
            (error: any) => {
                console.log('error');
            },
            () => {
                console.log('observable completed !');
            }
        ); 
      }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.timerSubsciption.unsubscribe();
    }
}