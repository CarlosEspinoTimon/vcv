import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { UniversityStudy } from './university-study.model';

@Component({
  selector: 'app-training-university',
  templateUrl: './training-university.component.html',
  styleUrls: ['./training-university.component.css']
})
export class TrainingUniversityComponent implements OnInit {

    universityStudies: UniversityStudy[];

    constructor(private trainingProvider: TrainingService) { }

    ngOnInit() {
        this.universityStudies = this.trainingProvider.getUniversityStudies();
    }
 

}
