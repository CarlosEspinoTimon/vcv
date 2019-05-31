import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalProjectsRoutingModule } from './personal-projects-routing.module';
import { PersonalProjectsComponent } from './personal-projects.component';

@NgModule({
  declarations: [PersonalProjectsComponent],
  imports: [
    CommonModule,
    PersonalProjectsRoutingModule
  ]
})
export class PersonalProjectsModule { }
