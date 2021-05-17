import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'hoodies-card-holder-component',
  styleUrls: ['card-holder.component.scss'],
  template: `
    <hoodies-card-component [card]='card'></hoodies-card-component>
  `
})

export class CardHolderComponent {
  @Input() card: Card | null = null;
}
