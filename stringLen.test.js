const stringLength = require('./strings');

test('check the length of given string', () => {
  expect(stringLength('123456789')).toBe(9);
});

test('check len more than 10', () => {
  expect(stringLength('12345678911')).toBe('String outside of the limits');
});