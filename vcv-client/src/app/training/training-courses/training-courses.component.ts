import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-training-courses',
  templateUrl: './training-courses.component.html',
  styleUrls: ['./training-courses.component.css']
})
export class TrainingCoursesComponent implements OnInit {

    coursesList: Course[];

    constructor(private trainingProvider: TrainingService) { }

    ngOnInit() {
        this.coursesList = this.trainingProvider.getCourses();
    }

}
