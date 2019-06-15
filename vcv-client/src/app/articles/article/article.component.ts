import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../models/article';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../service/articles.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

    public articles: Article[];
    paramsSubscription: Subscription;

    constructor(
        private articlesProvider: ArticlesService,
        private route: ActivatedRoute    
    ) { }

    ngOnInit() {
        const website = this.route.snapshot.params['website'];
        this.articles = this.articlesProvider.getArticles(website);
        this.paramsSubscription = this.route.params
            .subscribe(
                (params: Params) =>  {
                    this.articles = this.articlesProvider.getArticles(params['website'])
                }
            );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

}
