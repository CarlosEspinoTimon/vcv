import { Injectable } from '@angular/core';
import { TrainingElement } from './training-element.model';
import { UniversityStudy } from './training-university/university-study.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

    trainingList = [
        new TrainingElement('University', 'university'),
        new TrainingElement('Courses', 'courses')
    ]

    universityStudies = [
        new UniversityStudy(
            'Universidad Oberta de Cataluña - UOC',
            'Grado en Ingeniería Informática',
            8.5,
            'Hice blablabla, hay que comprobar la nota',
            'www.urldeltrabajo.com',
            new Date('12/12/2012'),
            new Date('12/12/2016'),
        ),
        new UniversityStudy(
            'La Laguna - ULL',
            'Arquitecto Técnico',
            8.5,
            'Hice blablabla, hay que comprobar la nota',
            '',
            new Date('12/12/2012'),
            new Date('12/12/2016'),
        )
    ]

    constructor() { }

    getTrainingElements(): TrainingElement[] {
        return this.trainingList;
    }

    getUniversityStudies(): UniversityStudy[] {
        return this.universityStudies;
    }
}
