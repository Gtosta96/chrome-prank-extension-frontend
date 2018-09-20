import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WsService {
  private socket: any;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io('http://localhost:3000');

    const observable = new Observable((_observer) => {
      this.socket.on('message', ((data: Object) => {
        console.log('received message from ws');
        _observer.next(data);
      }));

      return () => this.socket.disconnect;
    });

    const observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      },
    };

    return Subject.create(observer, observable);
  }
}
