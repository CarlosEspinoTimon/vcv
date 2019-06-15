import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { TrainingUniversityComponent } from './training-university/training-university.component';
import { TrainingCoursesComponent } from './training-courses/training-courses.component';
import { TrainingNoSelectionComponent } from './training-no-selection/training-no-selection.component';

import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  declarations: [
      TrainingComponent,
      TrainingUniversityComponent,
      TrainingCoursesComponent,
      TrainingNoSelectionComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    CustomMaterialsModule
  ]
})
export class TrainingModule { }
