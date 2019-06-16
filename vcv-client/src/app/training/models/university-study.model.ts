export class UniversityStudy {
    public title: string;
    public university: string;
    public grade: number;
    public info: string;
    public infoUrl?: string;
    public from: Date;
    public to: Date;
    public imageUrl: string;

    constructor(university: string, title: string, grade: number, info: string, infoUrl: string, from: Date, to: Date, imageUrl: string) {
        this.university = university,
        this.title = title,
        this.grade = grade,
        this.info = info,
        this.infoUrl = infoUrl,
        this.from = from,
        this.to = to,
        this.imageUrl = imageUrl
    };
}
