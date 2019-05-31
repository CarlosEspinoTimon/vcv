import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';
import { TrainingNoSelectionComponent } from './training-no-selection/training-no-selection.component';
import { TrainingUniversityComponent } from './training-university/training-university.component';
import { TrainingCoursesComponent } from './training-courses/training-courses.component';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
        children: [
            { path: '', component: TrainingNoSelectionComponent },
            { path: 'university', component: TrainingUniversityComponent },
            { path: 'courses', component: TrainingCoursesComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
