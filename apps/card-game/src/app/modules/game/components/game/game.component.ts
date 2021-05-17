/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, ViewChild } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { randomizeDeck } from '../../utils/randomize-deck';
import { generatePair } from '../../utils/generate-pair';
import { CardHolder } from '../../models/card-holder';

@Component({
  selector: 'hoodies-game-component',
  templateUrl: `game.component.html`,
  styleUrls: ['game.component.scss'],
})
export class GameComponent {
  @ViewChild('time', { static: true }) time!: TimeComponent;

  steps = 0;
  won = false;
  totalSolved = 0;
  disableTable = false;
  deck: CardHolder[] = [];
  state: 'idle' | 'waiting-second' = 'idle';
  currentCardHolder: CardHolder | null = null;

  startGame() {
    this.time.start();
    this.won = false;
    this.steps = 0;
    this.totalSolved = 0;
    this.disableTable = false;
    this.state = 'idle';
    this.currentCardHolder = null;

    this.deck = randomizeDeck(generatePair()).map((card) => ({
      status: 'not-flipped',
      card,
    }));
  }

  openCard(cardHolder: CardHolder) {
    cardHolder.status = 'flipped';
    const card = cardHolder.card;

    switch (this.state) {
      case 'idle': {
        this.state = 'waiting-second';
        this.currentCardHolder = cardHolder;

        break;
      }

      case 'waiting-second': {
        if (card.rank.power === this.currentCardHolder?.card.rank.power) {
          cardHolder.status = 'solved';
          this.currentCardHolder.status = 'solved';

          this.totalSolved++;

          if (this.totalSolved === 18) {
            this.won = true;
          }

        } else {
          const savedHolder = this.currentCardHolder;
          this.disableTable = true;

          window.setTimeout(() => {
            savedHolder!.status = 'not-flipped';
            cardHolder.status = 'not-flipped';

            this.disableTable = false;
          }, 1500);
        }

        this.steps++;
        this.currentCardHolder = null;
        this.state = 'idle';

        break;
      }
    }
  }
}
