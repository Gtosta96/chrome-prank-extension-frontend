import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WsService {
  private socket: SocketIOClient.Socket;

  constructor() { }

  connect(id: String): void {
    this.socket = io('http://localhost:3000', { query: { id } });
  }

  on(event: string): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, (data: any) => {
        observer.next(data);
      });
    });
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }
}
