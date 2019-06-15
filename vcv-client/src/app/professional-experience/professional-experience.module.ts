import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceRoutingModule } from './professional-experience-routing.module';
import { ProfessionalExperienceComponent } from './professional-experience.component';
import { ProfessionalExperienceNoSelectionComponent } from './professional-experience-no-selection/professional-experience-no-selection.component';
import { ProfessionalExperienceCompanyComponent } from './professional-experience-company/professional-experience-company.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { ProfessionalExperienceCurrentJobPipe } from './pipe/professional-experience-current-job.pipe';

@NgModule({
  declarations: [
      ProfessionalExperienceComponent,
      ProfessionalExperienceNoSelectionComponent,
      ProfessionalExperienceCompanyComponent,
      ProfessionalExperienceCurrentJobPipe,
  ],
  imports: [
    CommonModule,
    ProfessionalExperienceRoutingModule,
    CustomMaterialsModule
  ]
})
export class ProfessionalExperienceModule { }
