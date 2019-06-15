import { Component, OnInit } from '@angular/core';
import { Website } from './models/website';
import { ArticlesService } from './service/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    public webs: String[];

    constructor(private articlesProvider: ArticlesService) { }

    ngOnInit() {
        this.webs = this.articlesProvider.getWebsites();
    }

}
