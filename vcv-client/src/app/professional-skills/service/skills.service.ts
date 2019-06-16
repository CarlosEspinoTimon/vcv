import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { SkillElement } from '../models/skill-element';
import JSONdata from '../../../assets/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    skills = []


  constructor() { 
      this.processSkillsFromJSON();
  }

  processSkillsFromJSON() {
      JSONdata.skills.forEach((skill) => {
          this.skills.push(
              new Skills(
                  skill.name,
                  this.getSkillsElements(skill.skills)
              )
          )
      });
  }

  getSkillsElements(skills: any) {
      let processedSkills = [];
      skills.forEach((skill: SkillElement) => {
          processedSkills.push(skill)
      })
      return processedSkills;
  }

  getSkills() {
      return this.skills.map(skill => skill.name);
  }

  getSkill(skill: string): Skills {
      return this.skills.filter(skillElement => skillElement.name === skill)[0];
  }
}
