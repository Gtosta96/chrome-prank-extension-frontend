import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WsService } from './ws/ws.service';
import { WsMessagesService } from './ws-messages/ws-messages.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    WsService,
    WsMessagesService,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    WsService,
    WsMessagesService,
  ],
})
export class SharedModule { }
