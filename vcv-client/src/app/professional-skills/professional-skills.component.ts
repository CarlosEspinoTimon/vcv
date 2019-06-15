import { Component, OnInit } from '@angular/core';
import { SkillsService } from './service/skills.service';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {

    public skills: String[]

    constructor(private skillsProvider: SkillsService) { }

    ngOnInit() {
        this.skills = this.skillsProvider.getSkills();
    }

}
