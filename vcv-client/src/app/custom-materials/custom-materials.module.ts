import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatCardModule,
    MatListModule,
    MatIconModule
} from '@angular/material';

const modules = [
    MatCardModule,
    MatListModule,
    MatIconModule,
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
