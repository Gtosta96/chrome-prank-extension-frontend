import { Component, OnInit, Input } from '@angular/core';

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

  form: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.prank.id],
      html: [this.prank.html],
      css: [this.prank.css],
      url: [''],
      active: [!this.prank.disabled],
    });
  }

  onSubmit(values: any): void {
    console.log(values);
    this.api.update(this.id, values).subscribe((response) => {
      console.log(response);
    });
  }
}
