import { Component, OnInit } from '@angular/core';
import { TrainingService } from './service/training.service';
import { TrainingElement } from './models/training-element.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

    public trainingList: TrainingElement[];

    constructor(private trainingProvider: TrainingService) { }

    ngOnInit() {
        this.trainingList = this.trainingProvider.getTrainingElements();
    }

}
