export class SkillElement {
    public name: string;
    public level: string;
    public experience: string[];

    constructor(name: string, level: string, experience: string[]) {
        this.name = name;
        this.level = level;
        this.experience = experience;
    };
}
