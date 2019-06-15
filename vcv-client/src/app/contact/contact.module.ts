import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CustomMaterialsModule,
    AngularFontAwesomeModule
  ]
})
export class ContactModule { }
