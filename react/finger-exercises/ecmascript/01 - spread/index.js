import isArray from './utils';

export function min(...args) {
  if (args.length === 1) {
    if (isArray(args[0])) {
      return Math.min(...args[0]);
    }
    return args[0];
  } else if (args.length === 0) {
    return undefined;
  }
  return Math.min(...args);
}

export function copy(obj) {
  const { ...aux } = obj;
  return aux;
}
