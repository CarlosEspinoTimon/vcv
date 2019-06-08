import { SkillElement } from './skill-element';

export class Skills {
    public name: string;
    public skills: SkillElement[];

    constructor(name: string, skills: SkillElement[]) {
        this.name = name;
        this.skills = skills;
    }
}
