var StackArray = require('../stack.js');

describe('test jest', () => {
    test('adds 1 + 2 to equal 3', () => {
      var res = 1+2;
      expect(res).toBe(3);
    });
});

describe('size', () => {
    test('size push (1)', () => {
      var mstack = new StackArray();
      mstack.push(1)
      var res = mstack.size();
      expect(res).toBe(1);
    });

    test('size push (1)', () => {
        var mstack = new StackArray();
        mstack.push(0)
        var res = mstack.size();
        expect(res).toBe(1);
      });

    test('size push (1,2)', () => {
        var mstack = new StackArray();
        mstack.push(1)
        mstack.push(2)
        var res = mstack.size();
        expect(res).toBe(2);
      });
});

describe('size push pop', () => {
    test('size push (1,2,3) pop()', () => {
      var mstack = new StackArray();
      mstack.push(1)
      mstack.push(2)
      mstack.push(3)
      mstack.pop()
      var res = mstack.size();
      expect(res).toBe(2);
    });
});

describe('getmax', () => {
    test('getmax (1,2,3)', () => {
      var mstack = new StackArray();
      mstack.push(1)
      mstack.push(2)
      mstack.push(3)
      var res = mstack.getMax()
      expect(res).toBe(3);
    });
});