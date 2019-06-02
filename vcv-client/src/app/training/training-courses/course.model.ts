export class Course {
    public entity: string;
    public title: string;
    public info: string;
    public infoUrl?: string;
    public imageUrl: string;

    constructor(entity: string, title: string, info: string, infoUrl: string, imageUrl: string) {
        this.entity = entity,
        this.title = title,
        this.info = info,
        this.infoUrl = infoUrl,
        this.imageUrl = imageUrl
    };
}
