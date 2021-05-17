import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../../../../../score-back/src/record';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecordsService {
  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<Record[]> {
   return  this.httpClient.get<Record[]>('http://localhost:3333/api');
  }

  save(record: Record) {
    return this.httpClient.post('http://localhost:3333/api', record);
  }
}
