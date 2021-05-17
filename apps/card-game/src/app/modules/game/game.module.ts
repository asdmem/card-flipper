import { NgModule } from '@angular/core';
import { TimeComponent } from './components/time/time.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { CardHolderComponent } from './components/card-holder/card-holder.component';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './components/records/records.component';
import { WonComponent } from './components/won/won.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [GameComponent],
  declarations: [
    GameComponent,
    TimeComponent,
    CardComponent,
    CardHolderComponent,
    CardHolderComponent,
    RecordsComponent,
    WonComponent,
  ],
  providers: [],
})
export class GameModule {}
