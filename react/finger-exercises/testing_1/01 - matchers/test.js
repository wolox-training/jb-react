import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(4, 2)).toEqual(16);
    expect(pow(10, 3)).toEqual(1000);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  xit('pow returns undefined if there is just one argument', () => {
  });
  xit('pow returns an array of power results if array of pairs are sent as arguments', () => {
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
