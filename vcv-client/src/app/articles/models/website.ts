import { Article } from './article';

export class Website {
    public name: string;
    public articles: Article[];

    constructor(name: string, articles: Article[]) {
        this.name = name;
        this.articles = articles;
    }
}
