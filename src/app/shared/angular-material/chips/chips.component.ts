import { Component, OnInit, Input } from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent implements OnInit {
  @Input() class: string;

  @Input() visible: boolean = true;
  @Input() selectable: boolean = true;
  @Input() removable: boolean = true;
  @Input() addOnBlur: boolean = true;
  @Input() chips: Array<string> = [];
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chips.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }
}
