import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    MatSlideToggleModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
