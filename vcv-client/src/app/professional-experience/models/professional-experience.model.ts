import { ProfessionalExperienceProject } from './professional-experience-project.model'

export class ProfessionalExperience {
    public company: string;
    public position: string;
    public from: Date;
    public to: Date;
    public projects: ProfessionalExperienceProject[];
    public logo: string;
    public recommendation: string;

    constructor(company: string, position: string, from: Date, to: Date, projects: ProfessionalExperienceProject[], logo: string, recommendation: string) {
        this.company = company;
        this.position = position;
        this.from = from;
        this.to = to;
        this.projects = projects;
        this.logo = logo;
        this.recommendation = recommendation;
    }
}
