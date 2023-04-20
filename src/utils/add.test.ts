import { add } from './add';

describe('add function test', () => {
  it('1 + 2 = 3', () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
});
