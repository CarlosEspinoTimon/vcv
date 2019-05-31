import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalSkillsComponent } from './professional-skills.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessionalSkillsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalSkillsRoutingModule { }
