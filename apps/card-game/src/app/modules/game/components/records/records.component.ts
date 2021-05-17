import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../records.service';
import { Record } from '../../../../../../../score-back/src/record';

@Component({
  selector: 'hoodies-records-component',
  styleUrls: ['records.component.scss'],
  templateUrl: 'records.component.html'
})

export class RecordsComponent implements  OnInit {
  records: Record[] = [];

  constructor(private recordsService: RecordsService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.recordsService.get().subscribe(it => this.records = it);
  }
}
