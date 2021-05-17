import { Injectable } from '@nestjs/common';
import { Record } from '../record';

const db: Record[] = [];

@Injectable()
export class AppService {
  getRecords(): Record[] {
    return db;
  }

  saveRecord(record: Record) {
    db.push(record);
    db.sort((a, b) => a.totalSteps < b.totalSteps ? -1 : 1)
  }
}
