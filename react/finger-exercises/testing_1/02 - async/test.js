import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    await expect(getData(true)).resolves.toMatch('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    return expect(getData(true)).resolves.toMatch('data');
  });
  xit('getData throws error if false is sent as argument (use async/await)', async () => {
  });
  xit('getData throws error if false is sent as argument (avoid async/await)', () => {
  });
});
