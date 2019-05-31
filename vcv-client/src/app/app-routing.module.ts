import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'training',
        loadChildren: () => import('./training/training.module').then(mod => mod.TrainingModule)
    },
    {
        path: 'about-me',
        loadChildren: () => import('./about-me/about-me.module').then(mod => mod.AboutMeModule)
    },
    {
        path: 'professional-experience',
        loadChildren: () => import('./professional-experience/professional-experience.module').then(mod => mod.ProfessionalExperienceModule)
    },
    {
        path: 'professional-skills',
        loadChildren: () => import('./professional-skills/professional-skills.module').then(mod => mod.ProfessionalSkillsModule)
    },
    {
        path: 'personal-projects',
        loadChildren: () => import('./personal-projects/personal-projects.module').then(mod => mod.PersonalProjectsModule)
    },
    {
        path: 'articles',
        loadChildren: () => import('./articles/articles.module').then(mod => mod.ArticlesModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
    },
    { path: '**', redirectTo: '/home' }
    
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}