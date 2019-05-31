import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceRoutingModule } from './professional-experience-routing.module';
import { ProfessionalExperienceComponent } from './professional-experience.component';

@NgModule({
  declarations: [
      ProfessionalExperienceComponent
  ],
  imports: [
    CommonModule,
    ProfessionalExperienceRoutingModule
  ]
})
export class ProfessionalExperienceModule { }
