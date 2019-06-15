import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { ArticleNoSelectionComponent } from './article-no-selection/article-no-selection.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent,
        children: [
            { path: '', component: ArticleNoSelectionComponent },
            { path: ':website', component: ArticleComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
