import { Injectable } from '@angular/core';
import { TrainingElement } from './training-element.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

    trainingList = [
        new TrainingElement('University', 'university'),
        new TrainingElement('Courses', 'courses')
    ]

    constructor() { }

    getTrainingElements(): TrainingElement[] {
        return this.trainingList;
    }
}
