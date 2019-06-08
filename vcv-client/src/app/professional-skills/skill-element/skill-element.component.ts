import { Component, OnInit, OnDestroy } from '@angular/core';
import { Skills } from '../models/skills';
import { Subscription } from 'rxjs';
import { SkillsService } from '../service/skills.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SkillElement } from '../models/skill-element';

@Component({
  selector: 'app-skill-element',
  templateUrl: './skill-element.component.html',
  styleUrls: ['./skill-element.component.css']
})
export class SkillElementComponent implements OnInit, OnDestroy {

    public skill: Skills;
    paramsSubscription: Subscription;

    constructor(
        private skillsProvider: SkillsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const skill = this.route.snapshot.params['skill'];
        this.skill = this.skillsProvider.getSkill(skill);
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) => {
                    this.skill = this.skillsProvider.getSkill(params['skill']);
                }
            );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    getSkills() {
        return this.skill.skills;
    }

    getExperience(skill: SkillElement) {
        return this.skill.skills.filter(skillElement => skillElement.name === skill.name)[0].experience;
            
    }

    


}
