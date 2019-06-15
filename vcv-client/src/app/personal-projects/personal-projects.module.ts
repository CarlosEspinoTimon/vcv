import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalProjectsRoutingModule } from './personal-projects-routing.module';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { PersonalProjectNoSelectionComponent } from './personal-project-no-selection/personal-project-no-selection.component';
import { PersonalProjectsComponent } from './personal-projects.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
    declarations: [PersonalProjectNoSelectionComponent, PersonalProjectComponent, PersonalProjectsComponent],
  imports: [
    CommonModule,
    PersonalProjectsRoutingModule,
    CustomMaterialsModule
  ]
})
export class PersonalProjectsModule { }
