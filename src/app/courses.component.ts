import { Component } from '@angular/core'
import { CourseService } from './course/courses.service';

@Component({
    'selector' : 'courses',
    'template' : `<h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <img [src]="imageURL">
    `
})

export class CoursesComponent{
    private title = "List of Courses";
    private imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtjprGwxPE5FVcY72h1MWxvVVSiW7RFHmJ6DZ9G1lf0YOr-vV";
    private courses;

    constructor(service: CourseService){
        this.courses = service.getCourses();
    }
}