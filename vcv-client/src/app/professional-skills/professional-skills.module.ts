import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalSkillsRoutingModule } from './professional-skills-routing.module';
import { ProfessionalSkillsComponent } from './professional-skills.component';

@NgModule({
  declarations: [ProfessionalSkillsComponent],
  imports: [
    CommonModule,
    ProfessionalSkillsRoutingModule
  ]
})
export class ProfessionalSkillsModule { }
