import { Component, OnInit, Injectable } from '@angular/core';
import { TodoServices } from './todos.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'todo-add',
  templateUrl: './todo.update.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()

export class TodoUpdateComponent implements OnInit {
    private id:number;
    statusList: any;
    private message = "";

    private form = new FormGroup({
        'title' : new FormControl('', [Validators.required]),
        'status' : new FormControl('', Validators.required)
    });

    constructor(private route:ActivatedRoute, private service: TodoServices){
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('id');
            let todo = service.getTodo(this.id);
            
            this.form.controls['title'].setValue(todo.Title);
            this.form.controls['status'].setValue(todo.Status, {onlySelf: true});
        });

        this.statusList = [
            {id: 0, name: "Not Completed"},
            {id: 1, name: "Completed"}
        ];
    }

    update(){
        let title = this.form.get('title').value;
        let status = this.form.get('status').value;
        this.service.updateTodo(this.id, title, status);
        this.message = "Todo updated successfully!"
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
}