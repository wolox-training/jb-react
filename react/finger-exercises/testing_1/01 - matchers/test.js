import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(4, 2)).toEqual(16);
    expect(pow(10, 3)).toEqual(1000);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  it('pow returns undefined if there is just one argument', () => {
    expect(pow(1)).toBeUndefined();
  });
  it('pow returns an array of power results if array of pairs are sent as arguments', () => {
    expect(pow([4, 3], [5, 2])).toEqual([64, 25]);
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
