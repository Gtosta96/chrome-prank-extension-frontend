import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { PrankComponent } from './prank/prank.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    PrankComponent,
  ],
})
export class HomeModule { }
