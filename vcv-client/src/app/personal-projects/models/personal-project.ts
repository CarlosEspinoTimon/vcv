export class PersonalProject {
    public name: string;
    public info: string[];
    public technologies: string;
    public repository: string;
    public web?: string;

    constructor(name: string, info: string[], technologies: string, repository: string, web: string){
        this.name = name,
        this.info = info,
        this.technologies = technologies,
        this.repository = repository,
        this.web = web
    }
}
