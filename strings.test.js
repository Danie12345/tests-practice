const stringFuncs = require('./strings');

it('Length of 6', () => {
  expect(stringFuncs.stringLength('daniel')).toBe(6);
});

it('Length more than 0', () => {
  expect(stringFuncs.stringLength('')).toBe('String has no characters!');
});

it('Length less than 11', () => {
  expect(stringFuncs.stringLength('daniesdcsdl')).toBe('String has more than 10 characters!');
});