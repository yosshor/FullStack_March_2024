
const {sum, divide} = require('./counter');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('divie 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
  });

