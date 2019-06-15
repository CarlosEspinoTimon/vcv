import { Injectable } from '@angular/core';
import { Website } from '../models/website';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

    webs = [
        new Website(
            'Medium',
            [
                new Article(
                    'Autolearning 1.0: App Engine Standard, Flask, Angular 6 and Beautiful Soup',
                    'https://medium.com/@carlosespinotimon/autolearning-1-0-app-engine-standard-flask-angular-6-and-beautiful-soup-236551f23af'
                )
            ]
        )
    ]

  constructor() { }

  getWebsites() {
      return this.webs.map(web => web.name);
  }

  getArticles(name: string): Article[] {
      return this.webs.filter(website => website.name === name)[0].articles;
  }
}
