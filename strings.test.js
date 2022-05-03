const stringFuncs = require('./strings');
const calculator = require('./calculator');

describe('Strings tests', () => {
  // Length tests
  it('Length of 6', () => {
    expect(stringFuncs.stringLength('daniel')).toBe(6);
  });
  
  it('Length more than 0', () => {
    expect(stringFuncs.stringLength('')).toBe('String has no characters!');
  });
  
  it('Length less than 11', () => {
    expect(stringFuncs.stringLength('daniesdcsdl')).toBe('String has more than 10 characters!');
  });
  
  // Reverse tests
  it('Reverses string', () => {
    expect(stringFuncs.reverseString('daniel')).toBe('leinad');
  });
});

// Calculator tests
describe('Calculator tests', () => {
  // Add tests
  describe('Calculator adds', () => {
    it('Adds integers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
  
    it('Adds floats', () => {
      expect(calculator.add(1, 2.0)).toBe(3.0);
    });
  
    it('Adds infinity', () => {
      expect(calculator.add(Infinity, 1)).toBe(Infinity);
    });
  
  });
  
  // Subtract tests
  describe('Calculator subtracts', () => {
    it('Subtracts integers', () => {
      expect(calculator.sub(1, 2)).toBe(-1);
    });
    
    it('Subtracts floats', () => {
      expect(calculator.sub(1, 2.0)).toBe(-1.0);
    });
    
    it('Subtracts infinity', () => {
      expect(calculator.sub(10, Infinity)).toBe(-Infinity);
    });
  });
  
  // Multiply tests
  describe('Calculator multiplies', () => {
    it('Multiply integers', () => {
      expect(calculator.mul(4, 2)).toBe(8);
    });
    
    it('Multiply floats', () => {
      expect(calculator.mul(3.5, 2.0)).toBe(7.0);
    });
    
    it('Multiplies infinity', () => {
      expect(calculator.mul(10, Infinity)).toBe(Infinity);
    });
  });
  
  // Divide tests
  describe('Calculator divides', () => {
    it('Divides integers', () => {
      expect(calculator.div(10, 2)).toBe(5.0);
    });
    
    it('Divides floats', () => {
      expect(calculator.div(1, 2.0)).toBe(0.5);
    });
    
    it('Divides infinities', () => {
      expect(calculator.div(1, Infinity)).toBe(0);
    });
  });
});