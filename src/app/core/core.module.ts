import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';

import { WsService } from './ws/ws.service';
import { ApiService } from './api/api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [],
  providers: [
    WsService,
    ApiService,
  ],
})
export class CoreModule { }
