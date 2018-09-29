import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatIconModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSnackBarModule,
} from '@angular/material';

import { ChipsComponent } from './chips/chips.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  declarations: [
    ChipsComponent,
  ],
  exports: [
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,

    ChipsComponent,
  ],
})
export class AngularMaterialModule { }
