import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalSkillsComponent } from './professional-skills.component';
import { SkillNoSelectedComponent } from './skill-no-selected/skill-no-selected.component';
import { SkillElementComponent } from './skill-element/skill-element.component';

const routes: Routes = [
    {
        path: '',
        component: ProfessionalSkillsComponent,
        children: [
            { path: '', component:  SkillNoSelectedComponent},
            { path: ':skill', component: SkillElementComponent }

        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalSkillsRoutingModule { }
