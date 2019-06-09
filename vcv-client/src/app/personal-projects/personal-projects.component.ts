import { Component, OnInit } from '@angular/core';
import { PersonalProjectsService } from './service/personal-projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

    public projects: String[];

    constructor(private personalProjectProvider: PersonalProjectsService) { }

    ngOnInit() {
        this.projects = this.personalProjectProvider.getProjects();
    }

}
