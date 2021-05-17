import { SUITS } from '../const/suits';
import { RANKS } from '../const/ranks';
import { Card } from '../models/card';

export function generateDeck(): Card[] {
  const listOfCards: Card[] = [];

  for (const suit of SUITS) {
    for (const rank of RANKS) {
      listOfCards.push({
        suit,
        rank,
      })
    }
  }

  return listOfCards;
}
