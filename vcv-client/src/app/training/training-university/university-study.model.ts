export class UniversityStudy {
    public name: string;
    public title: string;
    public grade: number;
    public info: string;
    public infoUrl?: string;
    public from: Date;
    public to: Date;

    constructor(name: string, title: string, grade: number, info: string, infoUrl: string, from: Date, to: Date) {
        this.name = name,
        this.title = title,
        this.grade = grade,
        this.info = info,
        this.infoUrl = infoUrl,
        this.from = from,
        this.to = to
    };
}
