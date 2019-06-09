import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonalProject } from '../models/personal-project';
import { Subscription } from 'rxjs';
import { PersonalProjectsService } from '../service/personal-projects.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.css']
})
export class PersonalProjectComponent implements OnInit, OnDestroy {

    public project: PersonalProject;
    paramsSubscription: Subscription;

    constructor(
        private personalProjectProvier: PersonalProjectsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const project = this.route.snapshot.params['project'];
        this.project = this.personalProjectProvier.getProject(project);
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.project = this.personalProjectProvier.getProject(params['project']);
                }
            );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    getInfo() {
        return this.project.info;
    }

    

}
