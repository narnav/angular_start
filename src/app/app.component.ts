import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title:string = 'waga';
    students:Student[] =[]

    constructor(private stdSrv:StudentService ){
        stdSrv.getStudents().subscribe(res => this.students= res)
    }
}
