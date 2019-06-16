import { Injectable } from '@angular/core';
import { PersonalProject } from '../models/personal-project';
import JSONprojects from '../../../assets/personal-projects.json';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

    projects = []

    constructor() {
        this.getProjectsFromFile();
    }

    getProjectsFromFile() {
        JSONprojects.projects.forEach((personalProject: PersonalProject) => {
            this.projects.push(personalProject)
        })
    }

    getProjects() {
        return this.projects.map(project => project.name);
    }

    getProject(project: string): PersonalProject {
        return this.projects.filter(projectElement => projectElement.name === project)[0];
    }
}
