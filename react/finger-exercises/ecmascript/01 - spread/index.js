import isArray from './utils';

export function min(...args) {
  if (args.length !== 0) {
    const aux = isArray(args[0]) ? args[0] : args;
    return Math.min(...aux);
  }
  return undefined;
}

export function copy(obj) {
  if (isArray(obj)) {
    const [...aux] = obj;
    return aux;
  }
  const { ...aux } = obj;
  return aux;
}

export function reverseMerge(arr1, arr2) {
  return [...arr2, ...arr1];
}

export function filterAttribs(obj) {
  const { a, b, ...rest } = obj;
  return rest;
}
