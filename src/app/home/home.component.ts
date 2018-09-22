import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WsService } from '../core/ws/ws.service';
import { ApiService } from '../core/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute, private ws: WsService, private api: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      
      this.startWS(this.id);
      this.api.getById(this.id).subscribe(prank => {
        console.log(prank);
      });
    });
  }

  startWS(id: string): void {
    this.ws.connect(id);

    this.ws.on('connect').subscribe(this.onConnect);
    this.ws.on('disconnect').subscribe(this.onDisconnect);
    this.ws.on('message').subscribe(this.onMessage);
  }

  onConnect(): void {
    console.log('connected');
  }

  onMessage(data: any): void {
    console.log('message', data);
  }

  onDisconnect(): void {
    console.log('disconnect');
  }

  emitMessage(data: any): void {
    this.ws.emit('message', data);
  }
}
