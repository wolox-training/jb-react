import { shape, string, number } from 'prop-types';

export const matchPropType = shape ({
  player_one: string,
  player_two: string,
  winner: string,
  createdAt: string,
  id: number
});