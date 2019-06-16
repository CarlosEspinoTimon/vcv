import { Injectable } from '@angular/core';
import { Website } from '../models/website';
import { Article } from '../models/article';
import JSONinfo from '../../../assets/articles.json';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

    webs =  []

  constructor() {
      this.processArticlesFromJSON();
   }

   processArticlesFromJSON() { 
       JSONinfo.webs.forEach((website: Website) => {
           this.webs.push(website);
       })
   }

  getWebsites() {
      return this.webs.map(web => web.name);
  }

  getArticles(name: string): Article[] {
      return this.webs.filter(website => website.name === name)[0].articles;
  }
}
