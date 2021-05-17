import { Card } from '../models/card';
import { Suit } from '../models/suit';

export function generatePair(): Card[] {
  const list: Card[] = [];

  for (let i = 0; i < 36; i++) {
    list.push({
      suit: Suit.PAIR,
      rank: { name: 'Пара', power: i % 18 + 1 }
    });
  }

  return list;
}
