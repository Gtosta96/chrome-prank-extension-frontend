import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatIconModule, MatSlideToggleModule, MatButtonModule } from '@angular/material';

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

    ChipsComponent,
  ],
})
export class AngularMaterialModule { }
