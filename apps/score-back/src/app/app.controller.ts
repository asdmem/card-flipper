import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Record } from '../record';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRecords() {
    return this.appService.getRecords();
  }

  @Post()
  saveRecord(@Body() record: Record) {
    this.appService.saveRecord(record);
  }
}
