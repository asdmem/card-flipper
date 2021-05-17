import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'hoodies-won-component',
  styleUrls: ['won.component.scss'],
  templateUrl: 'won.component.html',
})
export class WonComponent {
  @Input() steps = 0;
  @Output() saved = new EventEmitter();

  name = new FormControl('');

  constructor(private recordsService: RecordsService) {}

  save() {
    this.recordsService
      .save({ name: this.name.value, totalSteps: this.steps })
      .subscribe(() => this.saved.emit());
  }
}
