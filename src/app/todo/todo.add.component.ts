import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { Http } from '@angular/http';

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
    private url = "http://localhost:3000/api/todos";

    constructor(private router:Router, private http: Http, private service: TodoServices){
        this.title = "";
        this.status = 0;
        this.statusList = [
            {id: 0, name: "Not Completed"},
            {id: 1, name: "Completed"}
        ];
    }

    addTodo(f){
        // this.service.addTodo(3, f.value.title, f.value.status.id);
        // console.log(this.service.getTodos());

        let todo = {title: f.value.title, status : f.value.status.id};

        this.http.post(this.url, todo).subscribe(response => {
            console.log("Todo added successfully!");
            this.timerSubsciption = interval(2000).subscribe(
                () => {
                    this.timerSubsciption.unsubscribe();
                    this.router.navigate(['/todo'])
                },
                (error: any) => {
                    console.log('error');
                },
                () => {
                    console.log('observable completed !');
                }
            );
        });

        f.reset();
        this.message = "Todo added successfully!";

       /* */
      }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }
}