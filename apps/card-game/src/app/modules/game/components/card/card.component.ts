import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'hoodies-card-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['card.component.scss'],
  template: `
    <div class='flip-card'>
      <div class='flip-card-inner' [ngClass]='{"flipped": !isFrontVisible}'>
        <div class='flip-card-front'>
          <ng-container *ngIf='card.suit === "pair"'>
            <span class='pair-number'>
              {{card.rank.power}}
            </span>
          </ng-container>
        </div>
        <div class='flip-card-back'>
        </div>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() card!: Card;
  @Input() isFrontVisible = true;

}
