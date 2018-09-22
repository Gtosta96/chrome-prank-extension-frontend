import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prank',
  templateUrl: './prank.component.html',
  styleUrls: ['./prank.component.css'],
})
export class PrankComponent implements OnInit {
  @Input() id: string;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      html: [''],
      css: [''],
      url: [''],
      active: [''],
    });
  }
}
