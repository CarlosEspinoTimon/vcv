import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfessionalExperience } from '../professional-experience.model'
import { ProfessionalExperienceService } from '../professional-experience.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
        private route: ActivatedRoute,
        private router: Router
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
        console.log(this.professionalExperience.projects)
        return this.professionalExperience.projects;
    }

}
