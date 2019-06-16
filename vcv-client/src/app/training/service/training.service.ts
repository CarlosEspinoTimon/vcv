import { Injectable } from '@angular/core';
import { TrainingElement } from '../models/training-element.model';
import { UniversityStudy } from '../models/university-study.model';
import { Course } from '../models/course.model';
import JSONinfo from '../../../assets/training.json';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

    trainingList = []

    universityStudies = []

    coursesList = []

    constructor() { 
        this.processInfoFromJSON();
    }

    processInfoFromJSON() {
        JSONinfo.training.forEach((trainingElement: TrainingElement) => {
            this.trainingList.push(trainingElement);
        });
        JSONinfo.universityStudies.forEach((universityStudy) => {
            this.universityStudies.push(universityStudy);
        });
        JSONinfo.courses.forEach((course: Course) => {
            this.coursesList.push(course);
        });
    }

    getTrainingElements(): TrainingElement[] {
        return this.trainingList;
    }

    getUniversityStudies(): UniversityStudy[] {
        return this.universityStudies;
    }

    getCourses(): Course[] {
        return this.coursesList;
    }
}
