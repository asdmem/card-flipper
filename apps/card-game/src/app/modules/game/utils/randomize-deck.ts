import { Card } from '../models/card';

export function randomizeDeck(list: Card[]): Card[]  {
  list = [...list];

  for (let i = 0; i < list.length; i++) {
    const nextIndex = Math.floor(Math.random() * (list.length - 1));
    const el = list[i];
    list[i] = list[nextIndex];
    list[nextIndex] = el;
  }

  return list
}
