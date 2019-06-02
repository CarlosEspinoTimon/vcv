import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatCardModule,
    MatListModule 
} from '@angular/material';

const modules = [
    MatCardModule,
    MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
      modules
  ]
})
export class CustomMaterialsModule { }
