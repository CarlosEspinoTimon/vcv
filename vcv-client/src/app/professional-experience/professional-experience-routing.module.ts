import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalExperienceComponent } from './professional-experience.component';
import { ProfessionalExperienceNoSelectionComponent } from './professional-experience-no-selection/professional-experience-no-selection.component';
import { ProfessionalExperienceCompanyComponent } from './professional-experience-company/professional-experience-company.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessionalExperienceComponent,
        children: [
            { path: '', component: ProfessionalExperienceNoSelectionComponent },
            { path: ':company', component: ProfessionalExperienceCompanyComponent }
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalExperienceRoutingModule { }
