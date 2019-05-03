import { EMAILRE, VALUE_REQUIRED_ERROR, MIN_8_CHARACTERS, VALID_EMAIL_ERROR } from '~constants/text';

export const isRequired = value => (value ? undefined : VALUE_REQUIRED_ERROR);

export const minLength = value => (value.length >= 8 ? undefined : MIN_8_CHARACTERS);

export const validEmail = value => (EMAILRE.test(value) ? undefined : VALID_EMAIL_ERROR);
