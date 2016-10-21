import {Component} from 'angular2/core'
import {CourseService} from './course.service' 
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        <input type='text' autogrow style='width:40%'/>
        <br>
        <h3> {{ title }} </h3>
        <ui>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ui>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]

})

export class CoursesComponent{
    title: string = 'Hi, this is Prasad...';
    courses;

    constructor(courseSer: CourseService){
        this.courses = courseSer.getCourses();
        this.courses.push('HTML CSS3');
        // this.courses = ['Prasad'];
    }
}