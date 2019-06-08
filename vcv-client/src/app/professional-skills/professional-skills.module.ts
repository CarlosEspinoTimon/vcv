import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalSkillsRoutingModule } from './professional-skills-routing.module';
import { ProfessionalSkillsComponent } from './professional-skills.component';
import { SkillNoSelectedComponent } from './skill-no-selected/skill-no-selected.component';
import { SkillElementComponent } from './skill-element/skill-element.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  declarations: [ProfessionalSkillsComponent, SkillNoSelectedComponent, SkillElementComponent],
  imports: [
    CommonModule,
    ProfessionalSkillsRoutingModule,
    CustomMaterialsModule
  ]
})
export class ProfessionalSkillsModule { }
