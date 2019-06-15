import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { PersonalProjectNoSelectionComponent } from './personal-project-no-selection/personal-project-no-selection.component';
import { PersonalProjectsComponent } from './personal-projects.component';

const routes: Routes = [
    {
        path: '',
        component: PersonalProjectsComponent,
        children: [
            { path: '', component: PersonalProjectNoSelectionComponent },
            { path: ':project', component: PersonalProjectComponent }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalProjectsRoutingModule { }
