import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})

export class SharedModule { }
