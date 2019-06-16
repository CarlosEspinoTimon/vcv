import { Injectable } from '@angular/core';
import { ProfessionalExperience } from '../models/professional-experience.model';
import { ProfessionalExperienceProject } from '../models/professional-experience-project.model';
import JSONdata from '../../../assets/experience.json';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {

    experience = [];


  constructor() { 
      this.processInfoFromJSON();
  }

  processInfoFromJSON() {
      JSONdata.experience.forEach((experience) => {
          this.experience.push(
              new ProfessionalExperience(
                  experience.company,
                  experience.position,
                  new Date(experience.from),
                  new Date(experience.to),
                  this.processProjects(experience.projects),
                  experience.logo,
                  experience.recommendation,
                )
          );
      })
  }

  processProjects(projects: any) {
      let processedProjects = [];
      projects.forEach((project: ProfessionalExperienceProject) => {
          processedProjects.push(project);
      });
      return processedProjects;
  }

  getCompanies() {
      return this.experience.map(experience => experience.company);
  }
  
  getExperience(company: string): ProfessionalExperience {
      return this.experience.filter(experience => experience.company === company)[0];
  }
}
