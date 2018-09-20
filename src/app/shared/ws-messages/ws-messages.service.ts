import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WsService } from '../ws/ws.service';

@Injectable({
  providedIn: 'root',
})
export class WsMessagesService {
  messages: Subject<any>;

  constructor(private wsService: WsService) { }

  listen(): Subject<any> {
    this.messages = <Subject<any>>
      this.wsService
        .connect()
        .pipe(map((response: any): any => response));

    return this.messages;
  }

  sendMsg(msg: string): void {
    this.messages.next(msg);
  }
}
