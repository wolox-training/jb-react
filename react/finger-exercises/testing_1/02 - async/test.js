import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    expect.assertions(1);
    await expect(getData(true)).resolves.toMatch('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect.assertions(1);
    return expect(getData(true)).resolves.toMatch('data');
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    expect.assertions(1);
    await expect(getData(false)).rejects.toThrow(Error);
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
    expect.assertions(1);
    return expect(getData(false)).rejects.toThrow(Error);
  });
});
