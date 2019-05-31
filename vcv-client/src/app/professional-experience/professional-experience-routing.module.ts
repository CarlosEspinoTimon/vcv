import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalExperienceComponent } from './professional-experience.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessionalExperienceComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalExperienceRoutingModule { }
