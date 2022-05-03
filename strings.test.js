const stringFuncs = require('./strings');

// Length test
it('Length of 6', () => {
  expect(stringFuncs.stringLength('daniel')).toBe(6);
});

it('Length more than 0', () => {
  expect(stringFuncs.stringLength('')).toBe('String has no characters!');
});

it('Length less than 11', () => {
  expect(stringFuncs.stringLength('daniesdcsdl')).toBe('String has more than 10 characters!');
});

// Reverse test
it('Reverses string', () => {
  expect(stringFuncs.reverseString('daniel')).toBe('leinad');
});