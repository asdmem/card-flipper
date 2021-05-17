import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'hoodies-time-component',
  styleUrls: ['time.component.scss'],
  template: `
    <div>Время</div>
    <span class='minutes'>{{minutes}} мин</span>
    <span class='delimiter'>:</span>
    <span class='seconds'>{{seconds}} сек</span>
  `
})

export class TimeComponent {
  secondsPassed = 0;

  get minutes(): number {
    return Math.floor(this.secondsPassed / 60);
  }

  get seconds(): number {
    return this.secondsPassed % 60;
  }

  private subscription: Subscription | null = null;

  start() {
    this.subscription = interval(1000).subscribe(() => this.secondsPassed++);
  }

  stop() {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.secondsPassed = 0;
  }
}
