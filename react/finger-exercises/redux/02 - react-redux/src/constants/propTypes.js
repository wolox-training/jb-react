import { shape, string, number } from 'prop-types';

export const booksSelectedPropType = shape({
  name: string,
  summary: string,
  quantity: number
});

export const bookPropType = shape({
  id: number,
  name: string,
  author: string,
  year: number,
  image: string,
  summary: string
});
