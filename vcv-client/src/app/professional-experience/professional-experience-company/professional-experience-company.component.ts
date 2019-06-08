import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfessionalExperience } from '../models/professional-experience.model'
import { ProfessionalExperienceService } from '../service/professional-experience.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-professional-experience-company',
  templateUrl: './professional-experience-company.component.html',
  styleUrls: ['./professional-experience-company.component.css']
})
export class ProfessionalExperienceCompanyComponent implements OnInit, OnDestroy {

    professionalExperience: ProfessionalExperience;
    paramsSubscription: Subscription;

    constructor(
        private peProvider: ProfessionalExperienceService,
        private route: ActivatedRoute
        ) { }

    ngOnInit() {
        const company = this.route.snapshot.params['company'];
        this.professionalExperience = this.peProvider.getExperience(company);
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.professionalExperience = this.peProvider.getExperience(params['company']);
                }
            );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    getProjects() {
        return this.professionalExperience.projects;
    }

}
