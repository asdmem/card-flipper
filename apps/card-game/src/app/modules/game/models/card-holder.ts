import { Card } from './card';

export interface CardHolder {
  status: 'flipped' | 'not-flipped' | 'solved';
  card: Card;
}
