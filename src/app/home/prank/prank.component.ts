import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-prank',
  templateUrl: './prank.component.html',
  styleUrls: ['./prank.component.scss'],
})
export class PrankComponent implements OnInit {
  @Input() id: string;
  @Input() prank: any;
  
  @ViewChild('iframe') iframe: any;

  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.prank.id],
      html: [this.prank.html],
      css: [this.prank.css],
      urlYoutube: [this.prank.urls.includes('youtube')],
      urlFacebook: [this.prank.urls.includes('facebook')],
      urlGoogle: [this.prank.urls.includes('google')],
      urlWhatsApp: [this.prank.urls.includes('whatsapp')],
      active: [!this.prank.disabled],
    });

    this.render(this.prank);
    this.listenChanges();
  }

  onSubmit(values: any): void {
    this.api.update(this.id, values).subscribe(() => {
      this.snackBar.open('Prank Saved Successfully', 'Close!', { duration: 3000, verticalPosition: 'top' });
    });
  }

  listenChanges(): void {
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
