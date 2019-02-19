import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.update.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoUpdateComponent implements OnInit {
    private id: string;
    statusList: any;
    private message = "";
    private timerSubsciption;
    private url = "http://localhost:3000/api/todos";

    private form = new FormGroup({
        'title' : new FormControl('', [Validators.required]),
        'status' : new FormControl('', Validators.required)
    });

    constructor(private http: Http, private router:Router, private route:ActivatedRoute, private service: TodoServices){
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            let todo = service.getTodo(+this.id);

            this.http.get(this.url + '/' + this.id).subscribe(response => {
                console.log(response.json());
                this.form.controls['title'].setValue(response.json().title);
                this.form.controls['status'].setValue(response.json().status, {onlySelf: true});
              });
        });

        this.statusList = [
            {id: 0, name: "Not Completed"},
            {id: 1, name: "Completed"}
        ];
    }

    update(){
        let title = this.form.get('title').value;
        let status = this.form.get('status').value;
        this.service.updateTodo(+this.id, title, status);
        this.message = "Todo updated successfully!";

        let todo = { title: title, status : status };
        this.http.put(this.url + '/' + this.id, todo).subscribe(response => {
            console.log(response.json());
        });
          
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

    redirect(){
        this.router.navigate(['/todo']);
    }

    get title(){
        return this.form.get('title');
    }

    get status(){
        return this.form.get('status');
    }

    isValid(){
        return this.form.get('title').valid && this.form.get('status').valid;
    }
    
    ngOnInit() {
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.timerSubsciption.unsubscribe();
    }
}