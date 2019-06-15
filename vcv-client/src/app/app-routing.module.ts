import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'training',
        loadChildren: './training/training.module#TrainingModule'
    },
    {
        path: 'about-me',
        loadChildren: './about-me/about-me.module#AboutMeModule'
    },
    {
        path: 'experience',
        loadChildren: './professional-experience/professional-experience.module#ProfessionalExperienceModule'
    },
    {
        path: 'skills',
        loadChildren: './professional-skills/professional-skills.module#ProfessionalSkillsModule'
    },
    {
        path: 'projects',
        loadChildren: './personal-projects/personal-projects.module#PersonalProjectsModule'
    },
    {
        path: 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
    { path: '**', redirectTo: '/home' }
    
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}