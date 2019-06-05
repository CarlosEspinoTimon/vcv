import { Component, OnInit } from '@angular/core';
import { ProfessionalExperienceService } from './professional-experience.service';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {

    public companies: String[];
    constructor(private experienceProvider: ProfessionalExperienceService ) { }


    ngOnInit() {
        this.companies = this.experienceProvider.getCompanies();
    }

}
