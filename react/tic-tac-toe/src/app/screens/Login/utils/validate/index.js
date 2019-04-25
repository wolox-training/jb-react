import { EMAILRE } from '~constants';

export const isRequired = value => value ? undefined : "Value is required";

export const minLength = value => value.length >= 8 ? undefined : "Value should at least have 8 characters";

export const validEmail = value => EMAILRE.test(value) ? undefined : "Email should be valid";
