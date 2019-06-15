import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article/article.component';
import { ArticleNoSelectionComponent } from './article-no-selection/article-no-selection.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  declarations: [ArticlesComponent, ArticleComponent, ArticleNoSelectionComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    CustomMaterialsModule
  ]
})
export class ArticlesModule { }
