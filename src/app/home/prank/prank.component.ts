import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

import { WsService } from '../../core/ws/ws.service';

@Component({
  selector: 'app-prank',
  templateUrl: './prank.component.html',
  styleUrls: ['./prank.component.scss'],
})
export class PrankComponent implements OnInit {
  @Input() id: string;
  @Input() prank: any;
  @Input() ws: WsService;
  
  @ViewChild('iframe') iframe: any;

  form: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.update(this.prank);
    this.listenChanges();
  }

  update(prank: any): void {
    this.form = this.fb.group({
      id: [prank.id],
      html: [prank.html],
      css: [prank.css],
      urlYoutube: [prank.urls.includes('youtube')],
      urlFacebook: [prank.urls.includes('facebook')],
      urlGoogle: [prank.urls.includes('google')],
      urlWhatsApp: [prank.urls.includes('whatsapp')],
      enabled: [prank.enabled],
    });

    this.render(this.prank);
  }

  onSubmit(values: any): void {
    this.ws.emit('update', values);
    this.snackBar.open('Prank Saved Successfully', 'Close!', { duration: 3000, verticalPosition: 'top' });
  }

  listenChanges(): void {
    this.ws.on('update').subscribe((values) => this.update(values));

    this.form.valueChanges.subscribe((values) => this.render(values));
  }

  render(values: any): void {
    const iframe = this.iframe.nativeElement.contentWindow.document;

    iframe.open();

    iframe.writeln(`
      ${values.html}
      <style>${values.css}</style>
    `);

    iframe.close();
  }
}
